import { useRouter } from 'next/router';

import { useActivePage, useSearchedValue } from '@/hooks/useContexts';
import { useResults } from '@/hooks/useResults';

export const useChangeParams = () => {
  const router = useRouter();
  const { searchedValue } = useSearchedValue();
  const { activePage } = useActivePage();
  const { fetchedRepos, fetchedUsers } = useResults(searchedValue, activePage, true);

  const refetch = () => {
    fetchedRepos.refetch();
    fetchedUsers.refetch();
  };

  const changeParams = (searchedValue: string, activePage: number) => {
    if (searchedValue.trim() !== '') {
      router
        .push(`/?q=${searchedValue}&page=${activePage}`, undefined, {
          shallow: true,
        })
        .then(refetch);
    }

    if (searchedValue.trim() === '') {
      router
        .push(`/?page=${activePage}`, undefined, {
          shallow: true,
        })
        .then(refetch);
    }
  };
  return { changeParams };
};
