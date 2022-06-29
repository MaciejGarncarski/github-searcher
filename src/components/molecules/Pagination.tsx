import { Dispatch, SetStateAction } from 'react';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';

import { PaginationButton } from '@/components/atoms/PaginationButton';

interface PaginationProps<T> {
  totalCount: number;
  activePage: T;
  setActivePage: Dispatch<SetStateAction<T>>;
}

export const Pagination = ({
  totalCount,
  activePage,
  setActivePage,
}: PaginationProps<number>) => {
  const totalPages = totalCount / 10;

  const isWholeNumber = totalPages - Math.floor(totalPages) === 0;

  const calculatedPages = isWholeNumber
    ? totalPages
    : Math.floor(totalPages) + 1;

  const handlePrevPage = () => {
    if (1 < activePage) {
      setActivePage((prevPage) => prevPage - 1);
    }
  };
  const handleNextPage = () => {
    if (activePage <= calculatedPages - 1) {
      setActivePage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className='w-full mb-8 grid grid-cols-pagination place-items-center gap-6 text-2xl'>
      <PaginationButton handleClick={handlePrevPage} disabled={1 <= activePage}>
        <RiArrowDropLeftLine size={40} />
        Prev
      </PaginationButton>

      <p className='text-2xl '>
        {activePage}/{calculatedPages}
      </p>
      <PaginationButton
        handleClick={handleNextPage}
        disabled={activePage > calculatedPages - 1}
      >
        Next
        <RiArrowDropRightLine size={40} />
      </PaginationButton>
    </div>
  );
};
