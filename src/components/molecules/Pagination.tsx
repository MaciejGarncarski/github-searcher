import { useActivePage, useSearchedValue } from '@/hooks/useContexts';
import { usePagination } from '@/hooks/usePagination';
import { useResults } from '@/hooks/useResults';
import { useResultsData } from '@/hooks/useResultsData';

import { PaginationButton } from '@/components/atoms/buttons/PaginationButton';
import { PaginationNumber } from '@/components/atoms/buttons/PaginationNumber';

export const Pagination = () => {
  const { activePage } = useActivePage();
  const { searchedValue } = useSearchedValue();

  const { fetchedRepos, fetchedUsers, isError } = useResults(searchedValue, activePage);
  const { totalCount } = useResultsData(fetchedRepos.data, fetchedUsers.data);

  const totalPages = Math.ceil(totalCount / 10);
  const pageQueue = usePagination(activePage, totalPages);

  if (totalPages <= 1 || isError) {
    return null;
  }

  return (
    <nav className='my-10 grid w-full grid-cols-2 grid-rows-2 gap-4 text-3xl md:mt-20  md:flex md:justify-center md:gap-10 '>
      <PaginationButton totalPages={totalPages} type='prev' />
      <span className='col-start-1 col-end-3 row-start-1 row-end-2 mx-auto md:hidden'>
        {activePage}/{totalPages}
      </span>
      <div className='col-start-1 col-end-3 row-start-1 row-end-2 mx-8 hidden gap-1 md:flex md:gap-2'>
        {pageQueue.map((pageNumber) => {
          if (pageNumber === '...') {
            return (
              <span className='text-center dark:text-white ' key={pageNumber + Math.random()}>
                &hellip;
              </span>
            );
          }
          return (
            <PaginationNumber key={pageNumber} pageNumber={parseInt(pageNumber, 10)}>
              {pageNumber}
            </PaginationNumber>
          );
        })}
      </div>
      <PaginationButton totalPages={totalPages} type='next' />
    </nav>
  );
};
