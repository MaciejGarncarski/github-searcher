import { useEffect, useState } from 'react';

import { ApiResponse } from '@/utils/queries';

import { RepoTypes, UserTypes } from '@/types/responseTypes';

export const useResultsData = (
  reposData: ApiResponse<RepoTypes> | undefined,
  usersData: ApiResponse<UserTypes> | undefined
) => {
  const [totalCount, setTotalCount] = useState<number>(0);
  const [sortedResults, setSortedResults] = useState<(UserTypes | RepoTypes)[]>(
    []
  );

  useEffect(() => {
    if (reposData && usersData) {
      const totalCount = usersData.totalCount + reposData.totalCount;
      setTotalCount(totalCount);
    }
  }, [reposData, usersData]);

  useEffect(() => {
    if (!reposData || !usersData) {
      return;
    }

    const mergedData = [...usersData.data, ...reposData.data];
    const mergedAndSortedData = mergedData.sort((a, b) => a.id - b.id);
    setSortedResults(mergedAndSortedData);
  }, [reposData, usersData]);

  return { totalCount, sortedResults };
};
