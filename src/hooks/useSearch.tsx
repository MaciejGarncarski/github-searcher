import { useQuery } from '@tanstack/react-query';

import { useActivePage, useSearchedValue } from '@/hooks/useContexts';
import { useDebounce } from '@/hooks/useDebounce';
import { getRepos, getUsers } from '@/utils/queries';

export const useSearch = () => {
  const { searchedValue } = useSearchedValue();
  const { activePage } = useActivePage();

  const debouncedSearch = useDebounce(
    searchedValue === '' ? 'Typescript' : searchedValue,
    1000
  );

  const debouncedPage = useDebounce(activePage, 1000);

  const fetchValues = {
    page: debouncedPage,
    search: debouncedSearch,
  };

  const fetchRepos = useQuery(
    ['repos', { ...fetchValues }],
    () => getRepos(debouncedSearch, debouncedPage),
    { enabled: false }
  );

  const fetchUsers = useQuery(
    ['users', { ...fetchValues }],
    () => getUsers(debouncedSearch, debouncedPage),
    { enabled: false }
  );

  return {
    fetchUsers,
    fetchRepos,
  };
};
