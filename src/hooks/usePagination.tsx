import { useEffect, useState } from 'react';

export const usePagination = (activePage: number, totalPages: number) => {
  const [pageQueue, setPageQueue] = useState<string[]>([
    '1',
    '2',
    '3',
    '4',
    '...',
  ]);

  useEffect(() => {
    const canShowLeftDots = activePage > 2;
    const canShowRightDots = totalPages - 2 > activePage;

    const calculatePageQueue = (start: number, end: number) => {
      const pagesArray = [...Array(totalPages).keys()];
      const pages = pagesArray.slice(start, end);
      return pages;
    };

    const activePageRounded = Math.ceil(activePage / 100) * 100;

    const previousHundred = Math.max(1, activePage - 100).toString();

    const nextHundred = Math.min(
      totalPages,
      activePage + 10 >= activePageRounded
        ? activePageRounded + 100
        : activePageRounded
    ).toString();

    if (canShowRightDots && !canShowLeftDots) {
      setPageQueue(['1', '2', '3', '4', '...', nextHundred]);
    } else if (canShowLeftDots && !canShowRightDots) {
      const pages = calculatePageQueue(activePage - 4, activePage);
      const pagesToString = pages.map((page) => page.toString());

      setPageQueue([previousHundred, '...', ...pagesToString]);
    } else if (canShowLeftDots && canShowRightDots) {
      const pages = calculatePageQueue(activePage - 2, activePage + 3);
      const pagesToString = pages.map((page) => page.toString());

      setPageQueue([
        previousHundred,
        '...',
        ...pagesToString,
        '...',
        nextHundred,
      ]);
    } else {
      if (totalPages <= 3 && totalPages > 1) {
        const pages = [...Array(totalPages).keys()];
        const pagesToString = pages.map((page) => page.toString());
        setPageQueue([...pagesToString]);
      }
    }
  }, [activePage, totalPages]);

  return [pageQueue];
};
