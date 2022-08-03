import { motion } from 'framer-motion';
import { ReactNode } from 'react';

import { clsxm } from '@/lib/clsxm';
import {
  useActivePage,
  useSearchedValue,
  useSettings,
} from '@/hooks/useContexts';
import { useReplace } from '@/hooks/useReplace';
import { useResults } from '@/hooks/useResults';
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
  const { searchedValue } = useSearchedValue();
  const { accentColor } = useSettings();

  const { fetchedRepos, fetchedUsers } = useResults(
    searchedValue,
    activePage,
    true
  );

  const replaceParams = useReplace();

  const animateY = activePage === pageNumber ? { y: 0 } : { y: -8 };

  const handleClick = () => {
    setActivePage(pageNumber);
    fetchedUsers.refetch();
    fetchedRepos.refetch();
    replaceParams(searchedValue, pageNumber);
  };

  return (
    <motion.button
      type='button'
      onClick={handleClick}
      className={clsxm(
        'flex-grow rounded-md px-2 py-0.5 dark:text-white md:px-4 md:py-1.5',
        activePage === pageNumber
          ? `cursor-not-allowed ${backgroundColors[accentColor]} text-white transition-colors`
          : 'cursor-pointer'
      )}
      whileTap={activePage === pageNumber ? {} : { scale: 0.9 }}
      whileHover={animateY}
      whileFocus={animateY}
    >
      {children}
    </motion.button>
  );
};
