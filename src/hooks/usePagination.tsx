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
      const pagesToString = pages.map((page) => page.toString());
      return pagesToString;
    };

    if (canShowRightDots && !canShowLeftDots) {
      setPageQueue(['1', '2', '3', '4', '...']);
    } else if (canShowLeftDots && !canShowRightDots) {
      const pages = calculatePageQueue(activePage - 4, activePage);
      setPageQueue(['...', ...pages]);
    } else if (canShowLeftDots && canShowRightDots) {
      const pages = calculatePageQueue(activePage - 2, activePage + 3);

      setPageQueue(['...', ...pages, '...']);
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
