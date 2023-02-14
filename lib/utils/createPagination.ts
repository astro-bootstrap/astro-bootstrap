/**
 * 
 * @param page - astro 'page' object
 * @param pathname - current page relative path
 * @returns Item[] for use with Pagination.astro component
 */


// https://gist.github.com/kottenator/9d936eb3e4e3c3e02598

const getRange = (start: number, end: number): number[] => {
  return Array(end - start + 1)
    .fill(undefined)
    .map((v, i) => i + start);
};

const createPageNumbers = (
  currentPage: number,
  pageCount: number,
): (number | string)[] => {
  let delta: number;
  if (pageCount <= 7) {
    // delta === 7: [1 2 3 4 5 6 7]
    delta = 7;
  } else {
    // delta === 2: [1 ... 4 5 6 ... 10]
    // delta === 4: [1 2 3 4 5 ... 10]
    delta = currentPage > 4 && currentPage < pageCount - 3 ? 2 : 4;
  }

  const range = {
    start: Math.round(currentPage - delta / 2),
    end: Math.round(currentPage + delta / 2),
  };

  if (range.start - 1 === 1 || range.end + 1 === pageCount) {
    range.start += 1;
    range.end += 1;
  }

  let pages: any =
    currentPage > delta
      ? getRange(
          Math.min(range.start, pageCount - delta),
          Math.min(range.end, pageCount),
        )
      : getRange(1, Math.min(pageCount, delta + 1));

  const withDots = (value: number, pair: any) =>
    pages.length + 1 !== pageCount ? pair : [value];

  if (pages[0] !== 1) {
    pages = withDots(1, [1, '...']).concat(pages);
  }

  if (pages[pages.length - 1] < pageCount) {
    pages = pages.concat(withDots(pageCount, ['...', pageCount]));
  }

  return pages;
};

interface Item {
  disabled: boolean;
  href: string | undefined;
  page: string;
}

const createComponentData = (page: any, pathname: string): Item[] => {
  const { currentPage, lastPage, url } = page;
  const { prev, next } = url;
  const pageNums = createPageNumbers(currentPage, lastPage);
  // remove numbers from the end of this pages path, if we are on a generated pagination page
  let baseURL: string = pathname.replace(/\d+$/, '');
  // remove trailing slash if present
  baseURL = baseURL.replace(/\/$/, '');

  // Initialise array with previous button
  const pages: Item[] = [
    {
      disabled: prev == null,
      href: prev,
      page: 'Previous',
    },
  ];

  // all page numbers
  pageNums.forEach((page) => {
    pages.push({
      disabled: false,
      href:
        page === '...'
          ? undefined
          : page === 1
          ? `${baseURL}`
          : `${baseURL}/${page}`,
      page: page.toString(),
    });
  });

  // add next button
  pages.push({
    disabled: next == null,
    href: next,
    page: 'Next',
  });

  return pages;
};


export default createComponentData;
