import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';

import { PaginationButton } from '@/components/atoms/PaginationButton';

interface PaginationProps<T> {
  totalPages: number;
  activePage: T;
  setActivePage: Dispatch<SetStateAction<T>>;
}

export const Pagination = ({
  totalPages,
  activePage,
  setActivePage,
}: PaginationProps<number>) => {
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
      const pages = calculatePageQueue(activePage, activePage + 5);
      setPageQueue([...pages, '...']);
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
      } else {
        setPageQueue(['1']);
      }
    }
  }, [activePage, totalPages]);

  const handlePrevPage = () => {
    if (1 < activePage) {
      setActivePage((prevPage) => prevPage - 1);
    }
  };
  const handleNextPage = () => {
    if (activePage <= totalPages - 1) {
      setActivePage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className='w-full text-2xl mb-8 grid grid-cols-2 grid-rows-2 gap-y-1 md:flex md:justify-center md:gap-10 lg:gap-20'>
      <PaginationButton handleClick={handlePrevPage} disabled={1 <= activePage}>
        <RiArrowDropLeftLine size={40} />
        Prev
      </PaginationButton>
      <div className='flex row-start-1 row-end-2 col-start-1 col-end-3 justify-center items-center gap-4'>
        {pageQueue.map((pageNum, idx) => {
          if (pageNum === '...') {
            return <span key={idx}>&hellip;</span>;
          }
          return (
            <p
              key={idx}
              onClick={() => setActivePage(+pageNum)}
              className={`
              px-4 py-2 rounded
              
              ${
                activePage === +pageNum
                  ? 'bg-blue-600 text-white cursor-default'
                  : 'cursor-pointer'
              }`}
            >
              {pageNum}
            </p>
          );
        })}
      </div>
      <PaginationButton
        handleClick={handleNextPage}
        disabled={activePage > totalPages - 1}
      >
        Next
        <RiArrowDropRightLine size={40} />
      </PaginationButton>
    </div>
  );
};
