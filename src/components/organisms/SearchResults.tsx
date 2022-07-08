import { useActivePage } from '@/hooks/useActivePage';
import { useDebounce } from '@/hooks/useDebounce';
import { useSearch } from '@/hooks/useSearch';

import { ErrorMessage } from '@/components/atoms/ErrorMessage';
import { Pagination } from '@/components/molecules/Pagination';
import { ResultPlaceholder } from '@/components/molecules/ResultPlaceholder';
import { ResultsList } from '@/components/molecules/ResultsList';

type SearchResultsProps = {
  searchedValue: string;
  initialQueryString: string;
};

export const SearchResults = ({
  searchedValue,
  initialQueryString,
}: SearchResultsProps) => {
  const debouncedSearch = useDebounce(
    searchedValue === `` ? initialQueryString : searchedValue,
    1200
  );

  const { activePage } = useActivePage();

  const { fetchRepos, fetchUsers, totalCount, repoUserData } = useSearch(
    activePage,
    debouncedSearch
  );

  if (
    fetchRepos.isFetching ||
    fetchUsers.isFetching ||
    fetchRepos.isLoading ||
    fetchUsers.isLoading
  ) {
    return <ResultPlaceholder />;
  }

  if (fetchRepos.isError || fetchUsers.isError) {
    return <ErrorMessage />;
  }

  return (
    <>
      <ResultsList
        totalCount={totalCount.toLocaleString(`en-US`)}
        data={repoUserData}
      />
      <Pagination totalPages={Math.ceil(totalCount / 10)} />
    </>
  );
};
