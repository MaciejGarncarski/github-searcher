import { useQuery } from '@tanstack/react-query';

import { getSingleUser } from '@/lib/queries';

export const useSingleUser = (userName: string) => {
  const { data, isError, isFetching, isLoading } = useQuery(['user', { username: userName }], () =>
    getSingleUser(userName)
  );

  return {
    data,
    isError,
    isFetching,
    isLoading,
  };
};
