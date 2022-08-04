import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { getRepos, getUsers } from '@/lib/queries';
import { useDebounce } from '@/hooks/useDebounce';
import { stringGuard } from '@/utils/stringGuard';

export const useResults = (searchedValue: string, activePage: number, enabled?: boolean) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(enabled ?? false);
  const router = useRouter();

  const handleFinally = () => {
    setIsEnabled(false);
  };

  const queryOptions = {
    enabled: isEnabled,
  };

  const debouncedSearch = useDebounce(searchedValue, 1500);

  const searchParam =
    stringGuard(router.query.q).trim() === '' ? 'Typescript' : stringGuard(router.query.q);

  const safeSearchValue = debouncedSearch.trim() === '' ? searchParam : debouncedSearch;

  const fetchValues = {
    searchedValue: safeSearchValue,
    page: activePage,
  };

  const fetchArguments = [safeSearchValue, activePage] as const;

  const fetchedRepos = useQuery(
    ['repos', fetchValues],
    () => getRepos(...fetchArguments).finally(handleFinally),
    queryOptions
  );

  const fetchedUsers = useQuery(
    ['users', fetchValues],
    () => getUsers(...fetchArguments).finally(handleFinally),
    queryOptions
  );

  const isError = fetchedRepos.isError || fetchedUsers.isError;
  const isLoading = fetchedRepos.isLoading || fetchedUsers.isLoading;
  const isFetching = fetchedRepos.isFetching || fetchedUsers.isFetching;

  return { fetchedRepos, fetchedUsers, isError, isLoading, isFetching };
};
