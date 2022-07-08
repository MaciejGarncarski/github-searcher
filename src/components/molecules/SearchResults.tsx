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
    return <ResultPlaceholder placeholderAmount={4} />;
  }

  if (fetchRepos.isError || fetchUsers.isError) {
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
