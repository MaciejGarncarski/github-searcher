import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

import { clsxm } from '@/lib/clsxm';
import { useChangeParams } from '@/hooks/useChangeParams';
import { useActivePage, useSearchedValue, useSettings } from '@/hooks/useContexts';
import { BG_COLORS } from '@/utils/colorsData';

type PaginationNumberProps = {
  children: ReactNode;
  pageNumber: number;
};

export const PaginationNumber = ({ children, pageNumber }: PaginationNumberProps) => {
  const { activePage, setActivePage } = useActivePage();
  const { searchedValue } = useSearchedValue();
  const { accentColor } = useSettings();

  const { changeParams } = useChangeParams();

  const animateY = activePage === pageNumber ? { y: 0 } : { y: -8 };

  const handleClick = () => {
    setActivePage(pageNumber);

    changeParams(searchedValue, pageNumber);
  };

  return (
    <li className='flex-grow'>
      <motion.button
        type='button'
        onClick={handleClick}
        className={clsxm(
          'rounded-md px-2 py-0.5 dark:text-white md:px-4 md:py-1.5',
          activePage === pageNumber
            ? `cursor-not-allowed ${BG_COLORS[accentColor]} text-slate-200 transition-colors`
            : 'cursor-pointer'
        )}
        whileTap={activePage === pageNumber ? {} : { scale: 0.9 }}
        whileHover={animateY}
        whileFocus={animateY}
      >
        {children}
      </motion.button>
    </li>
  );
};
