import { useQuery } from 'react-query';

import { ApiResponseType, RepoTypes, UserTypes } from '@/types/responseTypes';

const defaultQueryOptions = {
  refetchOnWindowFocus: false,
  keepPreviousData: true,
};

export const useFetch = (
  key: string,
  activePage: number,
  debouncedSearch: string,
  getter: (
    debouncedSearch: string,
    activePage: number
  ) => Promise<ApiResponseType<UserTypes | RepoTypes> | null>
) => {
  const query = useQuery<ApiResponseType<UserTypes | RepoTypes> | null, Error>(
    [key, debouncedSearch, { activePage: activePage }],
    () => getter(debouncedSearch, activePage),
    {
      ...defaultQueryOptions,
    }
  );
  return query;
};
