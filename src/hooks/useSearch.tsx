import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { getRepos, getUsers } from '@/utils/queries';

import type { RepoTypes, UserTypes } from '@/types/responseTypes';

export const useSearch = (activePage: number, debouncedSearch: string) => {
  const [apiResponseData, setApiResponseData] = useState<
    (UserTypes | RepoTypes)[]
  >([]);
  const [totalCount, setTotalCount] = useState<number>(0);

  const fetchOptions = {
    page: activePage,
    search: debouncedSearch,
  };

  const fetchRepos = useQuery(['repos', { ...fetchOptions }], () =>
    getRepos(debouncedSearch, activePage)
  );

  const fetchUsers = useQuery(['users', { ...fetchOptions }], () =>
    getUsers(debouncedSearch, activePage)
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
        setApiResponseData(sortedData);
      }
    }
  }, [fetchRepos.data, fetchUsers.data]);

  return {
    fetchUsers,
    fetchRepos,
    apiResponseData,
    totalCount,
  };
};
