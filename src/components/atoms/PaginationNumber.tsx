import { motion } from 'framer-motion';
import { MouseEventHandler, ReactNode } from 'react';

import { useActivePage, useMainColor } from '@/hooks/useContexts';
import { backgroundColors } from '@/utils/colors';

type PaginationNumberProps = {
  children: ReactNode;
  pageNum: string;
  onClick: MouseEventHandler;
};

export const PaginationNumber = ({
  children,
  pageNum,
  onClick,
}: PaginationNumberProps) => {
  const { activePage } = useActivePage();
  const { mainColor } = useMainColor();

  const animateY = activePage === +pageNum ? { y: 0 } : { y: -8 };

  return (
    <motion.button
      type='button'
      onClick={onClick}
      className={`
    flex-grow rounded-md px-2 py-0.5 dark:text-white
    md:px-4
    md:py-1.5 
    ${
      activePage === +pageNum
        ? `cursor-not-allowed ${backgroundColors[mainColor]} text-white transition-colors`
        : 'cursor-pointer'
    }`}
      whileTap={activePage === +pageNum ? {} : { scale: 0.9 }}
      whileHover={animateY}
      whileFocus={animateY}
    >
      {children}
    </motion.button>
  );
};
