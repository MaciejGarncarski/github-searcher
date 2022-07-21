import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useActivePage } from '@/hooks/useActivePage';
import { useDebounce } from '@/hooks/useDebounce';
import { useSearch } from '@/hooks/useSearch';
import { useSearchValue } from '@/hooks/useSearchValue';

import { ErrorMessage } from '@/components/molecules/ErrorMessage';
import { Pagination } from '@/components/molecules/Pagination';
import { ResultPlaceholder } from '@/components/molecules/ResultPlaceholder';
import { ResultsList } from '@/components/organisms/ResultsList';

type SearchResultsProps = {
  initialQueryString: string;
};

export const SearchResults = ({ initialQueryString }: SearchResultsProps) => {
  const router = useRouter();

  const { activePage, setActivePage } = useActivePage();

  const { searchedValue, setSearchedValue } = useSearchValue();

  const debouncedSearch = useDebounce(
    searchedValue === `` ? initialQueryString : searchedValue,
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
      router.push(`?q=${searchedValue}&page=${activePage}`, undefined, {
        shallow: true,
      });
    }

    if (searchedValue === '') {
      router.push(`?page=${activePage}`, undefined, { shallow: true });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePage, isError, isLoading]);

  useEffect(() => {
    if (router.query.page) {
      setActivePage(+router.query.page);
    }
    if (router.query.q && typeof router.query.q === 'string') {
      setSearchedValue(router.query.q);
    }
  }, [router.query, setActivePage, setSearchedValue]);

  useEffect(() => {
    if (apiResponseData.length === 0) {
      setActivePage(1);
    }
  }, [apiResponseData.length, setActivePage]);

  if (isLoading) {
    return <ResultPlaceholder placeholderAmount={4} />;
  }

  if (isError) {
    return <ErrorMessage error="Couldn't load data" emoji='😭' />;
  }

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
