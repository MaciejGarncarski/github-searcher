import { Dispatch, SetStateAction } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

import { usePagination } from '@/hooks/usePagination';

import { PaginationButton } from '@/components/atoms/PaginationButton';
import { PaginationProgress } from '@/components/atoms/PaginationProgress';

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
  const [pageQueue] = usePagination(activePage, totalPages);

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

  if (totalPages === 1) {
    return null;
  }

  return (
    <div className='w-full text-2xl my-10 grid grid-cols-2 grid-rows-2 md:flex md:justify-center md:gap-10 lg:gap-20'>
      <PaginationButton onClick={handlePrevPage} disabled={1 <= activePage}>
        <HiOutlineChevronLeft className='mt-1' size={24} />
        Prev
      </PaginationButton>
      <div className='flex row-start-1 row-end-2 col-start-1 col-end-3 justify-center items-center gap-2 md:gap-4'>
        {pageQueue.map((pageNum, idx) => {
          if (pageNum === '...') {
            return <span key={idx}>&hellip;</span>;
          }
          return (
            <PaginationProgress
              key={idx}
              activePage={activePage}
              pageNum={pageNum}
              onClick={() => setActivePage(+pageNum)}
            >
              {pageNum}
            </PaginationProgress>
          );
        })}
      </div>
      <PaginationButton
        onClick={handleNextPage}
        disabled={activePage > totalPages - 1}
      >
        Next
        <HiOutlineChevronRight className='mt-1' size={24} />
      </PaginationButton>
    </div>
  );
};
