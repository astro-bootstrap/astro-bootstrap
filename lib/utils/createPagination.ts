const pagination = (page: any, pathname: string, delta = 2) => {
  interface Item {
    disabled: boolean;
    href: string;
    page?: string | number;
  }

  const { currentPage, lastPage, url } = page;
  const { prev, next } = url;
  console.log(currentPage);

  // remove numbers from the end of this pages path, if we are on a generated pagination page
  let baseURL: string = pathname.replace(/\d+$/, '');
  // remove trailing slash if present
  baseURL = baseURL.replace(/\/$/, '');
  const prevLink: Item = {
    disabled: prev == null,
    href: prev,
    page: 'Previous',
  };
  const nextLink: Item = {
    disabled: next == null,
    href: next,
    page: 'Next',
  };

  // nested function inherits all parent props
  const genItem = (page: '...' | number) => {
    let href: string | undefined;
    let disabled = false;
    if (page === 1) {
      href = baseURL;
    } else if (page === '...') {
      href = undefined;
    } else {
      href = `${baseURL}/${page}`;
    }
    return {
      disabled,
      href,
      page,
    };
  };

  // existing
  const left = currentPage - delta;
  const right = currentPage + delta + 1;
  const range = [];
  const rangeWithDots = [];
  let l;

  for (let i = 1; i <= lastPage; i++) {
    // add first and last pages, and pages to display
    if (i == 1 || i == lastPage || (i >= left && i < right)) {
      range.push(i);
    }
  }
  // add ... for pages which don't exist in range[]
  for (let i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(genItem(l + 1));
      } else if (i - l !== 1) {
        rangeWithDots.push(genItem('...'));
      }
    }
    rangeWithDots.push(genItem(i));
    l = i;
  }
  rangeWithDots.unshift(prevLink);
  rangeWithDots.push(nextLink);
  return rangeWithDots;
};

export default pagination;
