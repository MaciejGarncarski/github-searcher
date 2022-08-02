import { motion } from 'framer-motion';
import { ReactNode } from 'react';

import { useActivePage, useSettings } from '@/hooks/useContexts';
import { useSearch } from '@/hooks/useSearch';
import { backgroundColors } from '@/utils/colorsConfig';

type PaginationNumberProps = {
  children: ReactNode;
  pageNumber: number;
};

export const PaginationNumber = ({
  children,
  pageNumber,
}: PaginationNumberProps) => {
  const { activePage, setActivePage } = useActivePage();

  const { accentColor } = useSettings();
  const { fetchRepos, fetchUsers } = useSearch();

  const animateY = activePage === pageNumber ? { y: 0 } : { y: -8 };

  const handleClick = () => {
    if (activePage === pageNumber) {
      return null;
    }

    setActivePage(pageNumber);
    fetchUsers.refetch();
    fetchRepos.refetch();
  };
  return (
    <motion.button
      type='button'
      onClick={handleClick}
      className={`
    flex-grow rounded-md px-2 py-0.5 dark:text-white
    md:px-4
    md:py-1.5 
    ${
      activePage === pageNumber
        ? `cursor-not-allowed ${backgroundColors[accentColor]} text-white transition-colors`
        : 'cursor-pointer'
    }`}
      whileTap={activePage === pageNumber ? {} : { scale: 0.9 }}
      whileHover={animateY}
      whileFocus={animateY}
    >
      {children}
    </motion.button>
  );
};
