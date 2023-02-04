const pagination = (current: number, last: number, delta = 2) => {
  const left = current - delta;
  const right = current + delta + 1;
  const range: number[] = [];
  const rangeWithDots: string[] = [];
  let l;

  for (let i = 1; i <= last; i++) {
    // add first and last pages, and pages to display
    if (i == 1 || i == last || (i >= left && i < right)) {
      range.push(i);
    }
  }
  // add ... for pages which don't exist in range[]
  for (const i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (i - l !== 1) {
        rangeWithDots.push('...');
      }
    }
    rangeWithDots.push((i).toString);
    l = i;
  }

  return rangeWithDots;
};

export default pagination;
