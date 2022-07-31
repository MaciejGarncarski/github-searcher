import { useQueryClient } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowLeft } from 'react-icons/bs';

import { useSearchedValue } from '@/hooks/useContexts';
import type { ApiResponse } from '@/utils/queries';
import { getColors, getRepos, getUsers } from '@/utils/queries';

import type { RepoTypes, UserTypes } from '@/types/responseTypes';

export const BackLink = () => {
  const { searchedValue } = useSearchedValue();
  const queryClient = useQueryClient();

  const searchString = searchedValue === '' ? 'Typescript' : searchedValue;

  const handleClick = async () => {
    await queryClient.prefetchQuery<ApiResponse<RepoTypes> | null>(
      [`repos`, { page: 1, search: searchString }],
      () => getRepos(searchString, 1)
    );
    await queryClient.prefetchQuery<ApiResponse<UserTypes> | null>(
      [`users`, { page: 1, search: searchString }],
      () => getUsers(searchString, 1)
    );
    await queryClient.prefetchQuery(['github language color'], getColors);
  };

  return (
    <Link href='/' passHref>
      <motion.a
        onClick={handleClick}
        whileHover={{ scale: 1.05 }}
        whileFocus={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className='z-10 flex items-center gap-2 rounded-md bg-slate-700 px-4 py-2 text-white shadow-lg dark:bg-slate-600'
      >
        <BsArrowLeft />
        Back
      </motion.a>
    </Link>
  );
};
