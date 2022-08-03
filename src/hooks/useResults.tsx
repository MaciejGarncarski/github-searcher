import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { useDebounce } from '@/hooks/useDebounce';
import { getRepos, getUsers } from '@/utils/queries';

export const useResults = (searchedValue: string, activePage: number, enabled?: boolean) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(enabled ?? false);

  const handleFinally = () => {
    setIsEnabled(false);
  };

  const queryOptions = {
    enabled: isEnabled,
  };

  const debouncedSearch = useDebounce(searchedValue === `` ? 'Typescript' : searchedValue, 1200);

  const fetchValues = {
    searchedValue: debouncedSearch,
    page: activePage,
  };

  const fetchedRepos = useQuery(
    ['repos', fetchValues],
    () => getRepos(debouncedSearch, activePage).finally(handleFinally),
    queryOptions
  );

  const fetchedUsers = useQuery(
    ['users', fetchValues],
    () => getUsers(debouncedSearch, activePage).finally(handleFinally),
    queryOptions
  );

  const isError = fetchedRepos.isError || fetchedUsers.isError;
  const isLoading = fetchedRepos.isLoading || fetchedUsers.isLoading;
  const isFetching = fetchedRepos.isFetching || fetchedUsers.isFetching;

  return { fetchedRepos, fetchedUsers, isError, isLoading, isFetching };
};
