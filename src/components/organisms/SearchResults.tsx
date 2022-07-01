import { useEffect, useState } from 'react';

import { useDebounce } from '@/hooks/useDebounce';
import { useFetch } from '@/hooks/useFetch';

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
  const [dataTest, setDataTest] = useState<UserTypes[] | RepoTypes[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [activePage, setActivePage] = useState<number>(1);

  const debouncedSearch = useDebounce(
    searchedValue === `` ? initialQueryString : searchedValue,
    1000
  );

  const fetchRepos = useFetch('repos', activePage, debouncedSearch, () =>
    getRepos(debouncedSearch, activePage)
  );

  const fetchUsers = useFetch('users', activePage, debouncedSearch, () =>
    getUsers(debouncedSearch, activePage)
  );

  useEffect(() => {
    if (fetchRepos.data && fetchUsers.data) {
      const totalCount =
        fetchUsers.data?.totalCount + fetchRepos.data.totalCount;
      setTotalCount(totalCount);
      const usersData = fetchUsers.data.translatedData;
      const reposData = fetchRepos.data.translatedData;
      if (usersData && reposData) {
        const mergedData = [...usersData, ...reposData] as
          | UserTypes[]
          | RepoTypes[];
        const sortedData = mergedData.sort((a, b) => a.id - b.id);
        setDataTest(sortedData);
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
        data={dataTest}
      />
      <Pagination
        totalPages={totalPages}
        activePage={activePage}
        setActivePage={setActivePage}
      />
    </>
  );
};
