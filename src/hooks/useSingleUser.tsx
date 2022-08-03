import { useQuery } from '@tanstack/react-query';

import { getSingleUser } from '@/utils/queries';

const fetchHeaders = {
  headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}` },
};

export const useSingleUser = (userName: string) => {
  const { data, isError, isFetching, isLoading } = useQuery(
    ['users', { username: userName }],
    () => getSingleUser(userName, fetchHeaders)
  );

  return {
    data,
    isError,
    isFetching,
    isLoading,
  };
};
