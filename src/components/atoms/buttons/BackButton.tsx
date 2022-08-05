import { useQueryClient } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { BsArrowLeft } from 'react-icons/bs';

import { getColors, getRepos, getUsers } from '@/lib/queries';
import { useActivePage, useSearchedValue } from '@/hooks/useContexts';

import type { ApiResponse, Repo, User } from '@/types/resultTypes';

export const BackButton = () => {
  const { searchedValue } = useSearchedValue();
  const queryClient = useQueryClient();
  const { activePage } = useActivePage();
  const router = useRouter();

  const searchString = searchedValue === '' ? 'Typescript' : searchedValue;

  const fetchValues = {
    searchedValue: searchedValue,
    page: activePage,
  };

  const handleClick = async () => {
    router.back();
    await queryClient.prefetchQuery<ApiResponse<Repo> | null>([`repos`, fetchValues], () =>
      getRepos(searchString, activePage)
    );
    await queryClient.prefetchQuery<ApiResponse<User> | null>([`users`, fetchValues], () =>
      getUsers(searchString, activePage)
    );
    await queryClient.prefetchQuery(['github language color'], getColors);
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileFocus={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      className='z-10 inline-flex max-w-max items-center gap-2 rounded-md bg-slate-600 px-4 py-2 text-3xl text-white shadow-lg shadow-slate-600/40 dark:bg-slate-700  lg:col-span-3'
    >
      <BsArrowLeft />
      Back
    </motion.button>
  );
};
