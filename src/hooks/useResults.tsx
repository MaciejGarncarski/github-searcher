import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { getRepos, getUsers } from '@/lib/queries';
import { useDebounce } from '@/hooks/useDebounce';

import { initialQueryString } from '@/pages';

export const useResults = (searchedValue: string, activePage: number, enabled?: boolean) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(enabled ?? false);
  const router = useRouter();
  const { q } = router.query;

  const handleFinally = () => {
    setIsEnabled(false);
  };

  const queryOptions = {
    enabled: isEnabled,
  };

  const safeRouterQuery = typeof q === 'string' ? q : initialQueryString;

  const debouncedSearch = useDebounce(searchedValue === '' ? safeRouterQuery : searchedValue, 1200);

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
