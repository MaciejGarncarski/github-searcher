import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useActivePage } from '@/hooks/useActivePage';
import { useDebounce } from '@/hooks/useDebounce';
import { useSearch } from '@/hooks/useSearch';

import { ErrorMessage } from '@/components/molecules/ErrorMessage';
import { Pagination } from '@/components/molecules/Pagination';
import { ResultPlaceholder } from '@/components/molecules/ResultPlaceholder';
import { ResultsList } from '@/components/organisms/ResultsList';

type SearchResultsProps = {
  searchedValue: string;
  initialQueryString: string;
};

export const SearchResults = ({
  searchedValue,
  initialQueryString,
}: SearchResultsProps) => {
  const router = useRouter();
  const { activePage } = useActivePage();

  const debouncedSearch = useDebounce(
    searchedValue === `` ? initialQueryString : searchedValue,
    1200
  );

  const { fetchRepos, fetchUsers, totalCount, repoUserData } = useSearch(
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
    if (!isLoading && !isError) {
      router.push(`?page=${activePage}`, undefined, { shallow: true });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePage, isError, isLoading]);

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
        apiData={repoUserData}
      />
      <Pagination totalPages={Math.ceil(totalCount / 10)} />
    </>
  );
};
