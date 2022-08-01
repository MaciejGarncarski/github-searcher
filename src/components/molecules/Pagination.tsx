import { useCallback } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

import { useActivePage } from '@/hooks/useContexts';
import { useSearchedValue } from '@/hooks/useContexts';
import { useDebounce } from '@/hooks/useDebounce';
import { usePagination } from '@/hooks/usePagination';
import { useSearch } from '@/hooks/useSearch';

import { PaginationButton } from '@/components/atoms/PaginationButton';
import { PaginationNumber } from '@/components/atoms/PaginationNumber';

export const Pagination = () => {
  const { activePage, setActivePage } = useActivePage();

  const { searchedValue } = useSearchedValue();

  const debouncedSearch = useDebounce(
    searchedValue === `` ? 'Typescript' : searchedValue,
    1200
  );

  const { totalCount, fetchUsers, fetchRepos } = useSearch(
    activePage,
    debouncedSearch
  );

  const totalPages = Math.ceil(totalCount / 10);
  const pageQueue = usePagination(activePage, totalPages);

  const handlePrevPage = useCallback(() => {
    if (1 < activePage) {
      setActivePage(activePage - 1);
    }
  }, [activePage, setActivePage]);

  const handleNextPage = useCallback(() => {
    if (activePage <= totalPages - 1) {
      setActivePage(activePage + 1);
    }
  }, [activePage, setActivePage, totalPages]);

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
        {pageQueue.map((pageNum) => {
          if (pageNum === '...') {
            return (
              <span
                className=' text-center dark:text-white '
                key={pageNum + Math.random()}
              >
                &hellip;
              </span>
            );
          }
          return (
            <PaginationNumber
              key={pageNum}
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
