import { useCallback } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

import { useActivePage } from '@/hooks/useContexts';
import { usePagination } from '@/hooks/usePagination';
import { useResultsData } from '@/hooks/useResultsData';
import { useSearch } from '@/hooks/useSearch';

import { PaginationButton } from '@/components/atoms/PaginationButton';
import { PaginationNumber } from '@/components/atoms/PaginationNumber';

export const Pagination = () => {
  const { activePage, setActivePage } = useActivePage();

  const { fetchUsers, fetchRepos } = useSearch();

  const { totalCount } = useResultsData(fetchRepos.data, fetchUsers.data);

  const totalPages = Math.ceil(totalCount / 10);
  const pageQueue = usePagination(activePage, totalPages);

  const refetchData = useCallback(() => {
    fetchUsers.refetch();
    fetchRepos.refetch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchRepos, fetchUsers]);

  const handlePrevPage = () => {
    if (1 < activePage) {
      setActivePage(activePage - 1);
      refetchData();
    }
  };

  const handleNextPage = () => {
    if (activePage <= totalPages - 1) {
      setActivePage(activePage + 1);
      refetchData();
    }
  };

  if (totalPages <= 1 || fetchUsers.isError || fetchRepos.isError) {
    return null;
  }

  return (
    <nav className='my-10 grid w-full grid-cols-2 grid-rows-2 gap-4 text-3xl md:mt-20  md:flex md:justify-center md:gap-10 '>
      <PaginationButton onClick={handlePrevPage} disabled={activePage === 1}>
        <HiOutlineChevronLeft className='mt-1' size={24} />
        Prev
      </PaginationButton>
      <span className='col-start-1 col-end-3 row-start-1 row-end-2 mx-auto md:hidden'>
        {activePage}/{totalPages}
      </span>
      <div className='col-start-1 col-end-3 row-start-1 row-end-2 mx-8 hidden gap-1 md:flex md:gap-2'>
        {pageQueue.map((pageNumber) => {
          if (pageNumber === '...') {
            return (
              <span className='text-center dark:text-white ' key={pageNumber}>
                &hellip;
              </span>
            );
          }
          return (
            <PaginationNumber
              key={pageNumber}
              pageNumber={parseInt(pageNumber, 10)}
            >
              {pageNumber}
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
