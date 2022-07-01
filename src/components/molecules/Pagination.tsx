import { Dispatch, SetStateAction } from 'react';
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
    <div className='w-full mb-8 flex items-center justify-center gap-10 xl:gap-40 text-2xl'>
      <PaginationButton handleClick={handlePrevPage} disabled={1 <= activePage}>
        <RiArrowDropLeftLine size={40} />
        Prev
      </PaginationButton>
      <p>
        {activePage}/{totalPages}
      </p>
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
