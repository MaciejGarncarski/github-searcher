import { useEffect, useState } from 'react';

export const usePagination = (activePage: number, totalPages: number) => {
  const [pageQueue, setPageQueue] = useState<string[]>([]);

  useEffect(() => {
    const canShowRightDots = totalPages - 2 > activePage;
    const canShowLeftDots = activePage > 3;

    const calculatePageQueue = (start: number, end: number) => {
      const pagesArray = [...Array(totalPages).keys()];
      const pages = pagesArray.slice(start, end);
      const pagesAsStrings = pages.map((page) => page.toString());

      return {
        asStrings: pagesAsStrings,
        asNumbers: pages,
      };
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
      setPageQueue(['1', '2', '3', '4', '5', '...', next100Pages]);
    }

    if (canShowLeftDots && !canShowRightDots) {
      const pages = calculatePageQueue(totalPages - 2, totalPages);

      const halfOfPages = Math.floor(
        Math.min(...pages.asNumbers) / 2
      ).toString();

      setPageQueue([
        previous100Pages,
        '...',
        halfOfPages,
        '...',
        ...pages.asStrings,
        totalPages.toString(),
      ]);
    }

    if (canShowLeftDots && canShowRightDots) {
      const pages = calculatePageQueue(activePage - 1, activePage + 2);
      setPageQueue([
        previous100Pages,
        '...',
        ...pages.asStrings,
        '...',
        next100Pages,
      ]);
    }

    if (totalPages <= 5) {
      const pages = [...Array(totalPages).keys()];
      const pagesAsStrings = pages.map((page) => (page + 1).toString());
      setPageQueue([...pagesAsStrings]);
    }
  }, [activePage, totalPages]);

  return pageQueue;
};
