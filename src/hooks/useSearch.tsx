import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { getRepos, getUsers } from '@/pages/api/queries';

import type { RepoTypes, UserTypes } from '@/types/responseTypes';

export const useSearch = (activePage: number, debouncedSearch: string) => {
  const [repoUserData, setRepoUserData] = useState<(UserTypes | RepoTypes)[]>(
    []
  );
  const [totalCount, setTotalCount] = useState<number>(0);

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

  return {
    fetchUsers,
    fetchRepos,
    repoUserData,
    totalCount,
  };
};
