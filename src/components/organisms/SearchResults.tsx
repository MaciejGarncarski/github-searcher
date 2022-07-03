import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { useDebounce } from '@/hooks/useDebounce';

import { StateInformation } from '@/components/atoms/StateInformation';
import { Pagination } from '@/components/molecules/Pagination';
import { ResultsList } from '@/components/molecules/ResultsList';

import { getRepos, getUsers } from '@/pages/api/queries';

import type { RepoTypes, UserTypes } from '@/types/responseTypes';

type SearchResultsProps = {
  searchedValue: string;
  initialQueryString: string;
};

export const SearchResults = ({
  searchedValue,
  initialQueryString,
}: SearchResultsProps) => {
  const [repoUserData, setRepoUserData] = useState<(UserTypes | RepoTypes)[]>(
    []
  );
  const [totalCount, setTotalCount] = useState<number>(0);
  const [activePage, setActivePage] = useState<number>(1);

  const debouncedSearch = useDebounce(
    searchedValue === `` ? initialQueryString : searchedValue,
    1000
  );

  const fetchOptions = {
    page: activePage,
    search: debouncedSearch,
  };

  const fetchRepos = useQuery(
    ['repos', { ...fetchOptions }],
    () => getRepos(debouncedSearch, activePage),
    { keepPreviousData: true, refetchOnWindowFocus: false }
  );

  const fetchUsers = useQuery(
    ['users', { ...fetchOptions }],
    () => getUsers(debouncedSearch, activePage),
    { keepPreviousData: true, refetchOnWindowFocus: false }
  );

  useEffect(() => {
    if (fetchRepos.data && fetchUsers.data) {
      const totalCount =
        fetchUsers.data.totalCount + fetchRepos.data.totalCount;
      setTotalCount(totalCount);
      const usersData = fetchUsers.data.translatedData;
      const reposData = fetchRepos.data.translatedData;
      if (usersData && reposData) {
        const mergedData = [...usersData, ...reposData];
        const sortedData = mergedData.sort((a, b) => a.id - b.id);
        setRepoUserData(sortedData);
      }
    }
  }, [fetchRepos.data, fetchUsers.data]);

  const totalPages = Math.ceil(totalCount / 10);

  if (fetchRepos.isFetching || fetchUsers.isFetching) {
    return <StateInformation>Loading data...</StateInformation>;
  }
  if (fetchRepos.isError || fetchUsers.isError) {
    return (
      <StateInformation>Error occured while loading data</StateInformation>
    );
  }

  return (
    <>
      <ResultsList
        totalCount={totalCount.toLocaleString(`en-US`)}
        data={repoUserData}
      />
      <Pagination
        totalPages={totalPages}
        activePage={activePage}
        setActivePage={setActivePage}
      />
    </>
  );
};
