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
    const canShowRightDots = totalPages - 2 > activePage;
    const canShowLeftDots = activePage > 3;

    const calculatePageQueue = (start: number, end: number) => {
      const pagesArray = [...Array(totalPages).keys()];
      const pages = pagesArray.slice(start, end);
      const pagesAsStrings = pages.map((page) => page.toString());

      return pagesAsStrings;
    };

    const activePageRounded = Math.ceil(activePage / 100) * 100;

    const previous100Pages = Math.max(1, activePage - 100).toString();

    const next100Pages = Math.min(
      totalPages,
      activePage + 10 >= activePageRounded
        ? activePageRounded + 100
        : activePageRounded
    ).toString();

    if (canShowRightDots && !canShowLeftDots) {
      setPageQueue(['1', '2', '3', '4', '...', next100Pages]);
    } else if (canShowLeftDots && !canShowRightDots) {
      const pages = calculatePageQueue(totalPages - 3, totalPages);
      setPageQueue([previous100Pages, '...', ...pages, totalPages.toString()]);
    } else if (canShowLeftDots && canShowRightDots) {
      const pages = calculatePageQueue(activePage - 2, activePage + 3);
      setPageQueue([previous100Pages, '...', ...pages, '...', next100Pages]);
    } else if (totalPages <= 3) {
      const pages = [...Array(totalPages).keys()];
      const pagesAsStrings = pages.map((page) => (page + 1).toString());
      setPageQueue([...pagesAsStrings]);
    }
  }, [activePage, totalPages]);

  return pageQueue;
};
