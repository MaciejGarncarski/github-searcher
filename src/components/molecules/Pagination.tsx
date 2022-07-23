import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

import { useActivePage } from '@/hooks/useContexts';
import { usePagination } from '@/hooks/usePagination';

import { PaginationButton } from '@/components/atoms/PaginationButton';
import { PaginationNumber } from '@/components/atoms/PaginationNumber';

interface PaginationProps {
  totalPages: number;
}

export const Pagination = ({ totalPages }: PaginationProps) => {
  const { activePage, setActivePage } = useActivePage();

  const pageQueue = usePagination(activePage, totalPages);

  const handlePrevPage = () => {
    if (1 < activePage) {
      setActivePage(activePage - 1);
    }
  };
  const handleNextPage = () => {
    if (activePage <= totalPages - 1) {
      setActivePage(activePage + 1);
    }
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav className='my-10 grid w-full grid-cols-2 grid-rows-2 gap-4 text-2xl md:my-20  md:flex md:justify-center md:gap-10 lg:gap-20'>
      <PaginationButton onClick={handlePrevPage} disabled={activePage === 1}>
        <HiOutlineChevronLeft className='mt-1' size={24} />
        Prev
      </PaginationButton>
      <div className='col-start-1 col-end-3 row-start-1 row-end-2 mx-4 flex items-center justify-center gap-1 md:gap-4'>
        {pageQueue.map((pageNum, idx) => {
          if (pageNum === '...') {
            return (
              <span
                className='flex-grow text-center dark:text-white '
                key={idx}
              >
                &hellip;
              </span>
            );
          }
          return (
            <PaginationNumber
              key={idx}
              activePage={activePage}
              pageNum={pageNum}
              onClick={() => setActivePage(+pageNum)}
            >
              {pageNum}
            </PaginationNumber>
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
    </nav>
  );
};
