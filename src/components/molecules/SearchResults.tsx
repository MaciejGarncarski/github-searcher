import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useActivePage, useSearchValue } from '@/hooks/useContexts';
import { useDebounce } from '@/hooks/useDebounce';
import { useSearch } from '@/hooks/useSearch';

import { Pagination } from '@/components/molecules/Pagination';
import { ResultsList } from '@/components/organisms/ResultsList';

export const SearchResults = () => {
  const router = useRouter();

  const { activePage, setActivePage } = useActivePage();

  const { searchedValue } = useSearchValue();

  const debouncedSearch = useDebounce(
    searchedValue === `` ? 'Typescript' : searchedValue,
    1200
  );

  const { fetchRepos, fetchUsers, totalCount, apiResponseData } = useSearch(
    activePage,
    debouncedSearch
  );

  const isLoading =
    fetchRepos.isFetching ||
    fetchUsers.isFetching ||
    fetchRepos.isLoading ||
    fetchUsers.isLoading;
  const isError = fetchRepos.isError || fetchUsers.isError;

  useEffect(() => {
    if (isLoading && isError) {
      return;
    }

    if (searchedValue !== '') {
      router.push(
        {
          query: {
            q: searchedValue,
            page: activePage,
          },
        },
        undefined,
        { shallow: true }
      );
    }

    if (searchedValue === '') {
      router.push(
        {
          query: {
            page: activePage,
          },
        },
        undefined,
        { shallow: true }
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePage, isError, isLoading]);

  useEffect(() => {
    if (apiResponseData.length === 0) {
      setActivePage(1);
    }
  }, [apiResponseData.length, setActivePage]);

  // if (isLoading) {
  //   return <ResultPlaceholder placeholderAmount={4} />;
  // }

  // if (isError) {
  //   return <ErrorMessage error="Couldn't load data" emoji='😭' />;
  // }

  return (
    <>
      <ResultsList
        totalCount={totalCount.toLocaleString(`en-US`)}
        apiData={apiResponseData}
      />

      <Pagination totalPages={Math.ceil(totalCount / 10)} />
    </>
  );
};
