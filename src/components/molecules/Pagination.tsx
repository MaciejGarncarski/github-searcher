import { useActivePage, useResultsSettings, useSearchedValue } from '@/hooks/useContexts';
import { usePagination } from '@/hooks/usePagination';
import { useResults } from '@/hooks/useResults';
import { useResultsData } from '@/hooks/useResultsData';

import { PaginationButton } from '@/components/atoms/buttons/PaginationButton';
import { PaginationNumber } from '@/components/atoms/buttons/PaginationNumber';

export const Pagination = () => {
  const { activePage } = useActivePage();
  const { searchedValue } = useSearchedValue();
  const { usersData, reposData, isError } = useResults(searchedValue, activePage);
  const { perPage } = useResultsSettings();

  const { totalCount } = useResultsData(reposData, usersData);

  const totalPages = Math.ceil(totalCount / (perPage * 2));

  const pageQueue = usePagination(activePage, totalPages);

  if (totalPages <= 1 || isError) {
    return null;
  }

  return (
    <nav className='my-10 grid w-full grid-cols-2 grid-rows-2 gap-4 text-3xl md:mt-14 md:flex md:justify-center md:gap-10 '>
      <PaginationButton totalPages={totalPages} type='prev' />
      <ul className='col-start-1 col-end-3 row-start-1 row-end-2 mx-8 flex gap-1 text-xl md:gap-2 md:text-3xl'>
        {pageQueue.map((pageNumber) => {
          if (pageNumber === '...') {
            return (
              <li className='text-center dark:text-white ' key={pageNumber + Math.random()}>
                &hellip;
              </li>
            );
          }
          return (
            <PaginationNumber key={pageNumber} pageNumber={parseInt(pageNumber, 10)}>
              {pageNumber}
            </PaginationNumber>
          );
        })}
      </ul>
      <PaginationButton totalPages={totalPages} type='next' />
    </nav>
  );
};
