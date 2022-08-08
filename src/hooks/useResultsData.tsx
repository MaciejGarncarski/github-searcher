import { useEffect, useState } from 'react';

import type { ApiResponse, Repo, User } from '@/types/resultTypes';

export const useResultsData = (
  reposData: ApiResponse<Repo> | undefined,
  usersData: ApiResponse<User> | undefined
) => {
  const [totalCount, setTotalCount] = useState<number>(0);
  const [sortedResults, setSortedResults] = useState<(User | Repo)[]>([]);

  useEffect(() => {
    if (!reposData || !usersData) {
      return;
    }

    const { totalCount: usersTotal } = usersData;
    const { totalCount: reposTotal } = reposData;

    const totalCount = usersTotal + reposTotal;
    setTotalCount(totalCount);
    return () => setTotalCount(0);
  }, [reposData, usersData]);

  useEffect(() => {
    if (!reposData || !usersData) {
      return;
    }

    const { data: users } = usersData;
    const { data: repos } = reposData;

    const mergedData = [...users, ...repos];
    const mergedAndSortedData = mergedData.sort((a, b) => a.id - b.id);
    setSortedResults(mergedAndSortedData);

    return () => setSortedResults([]);
  }, [reposData, usersData]);

  return { totalCount, sortedResults };
};
