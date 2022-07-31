import { motion } from 'framer-motion';
import { MouseEventHandler, ReactNode } from 'react';

import { useMainColor } from '@/hooks/useContexts';
import { backgroundColors } from '@/utils/colors';

type PaginationNumberProps = {
  children: ReactNode;
  pageNum: string;
  activePage: number;
  onClick: MouseEventHandler;
};

export const PaginationNumber = ({
  children,
  pageNum,
  activePage,
  onClick,
}: PaginationNumberProps) => {
  const animateY = activePage === +pageNum ? { y: 0 } : { y: -8 };
  const { mainColor } = useMainColor();

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
