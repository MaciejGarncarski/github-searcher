import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { getRepos, getUsers } from '@/lib/queries';
import { useResultsSettings } from '@/hooks/useContexts';
import { useDebounce } from '@/hooks/useDebounce';

import { initialQueryString } from '@/pages';

export const useResults = (searchedValue: string, activePage: number) => {
  const router = useRouter();
  const { q } = router.query;
  const { perPage } = useResultsSettings();

  const safeRouterQuery = typeof q === 'string' ? q : initialQueryString;

  const TIMEOUT = 1200;

  const debouncedSearch = useDebounce(
    searchedValue === '' ? safeRouterQuery : searchedValue,
    TIMEOUT
  );

  const debouncedPage = useDebounce(activePage, TIMEOUT);

  const fetchValues = {
    searchedValue: debouncedSearch,
    page: debouncedPage,
    perPage: perPage,
  };

  const fetchedRepos = useQuery(['repos', fetchValues], () =>
    getRepos(debouncedSearch, debouncedPage, perPage)
  );

  const fetchedUsers = useQuery(['users', fetchValues], () =>
    getUsers(debouncedSearch, debouncedPage, perPage)
  );

  const usersData = fetchedUsers.data;
  const reposData = fetchedRepos.data;

  const refetch = () => {
    fetchedRepos.refetch();
    fetchedUsers.refetch();
  };

  const isError = fetchedRepos.isError || fetchedUsers.isError;
  const isLoading = fetchedRepos.isLoading || fetchedUsers.isLoading;
  const isFetching = fetchedRepos.isFetching || fetchedUsers.isFetching;
  const isFetched = fetchedRepos.isFetched || fetchedUsers.isFetched;

  return { usersData, reposData, isError, isLoading, isFetching, isFetched, refetch };
};
