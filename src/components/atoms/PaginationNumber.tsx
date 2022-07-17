import { motion } from 'framer-motion';
import { MouseEventHandler, ReactNode } from 'react';

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
  const animateY = activePage !== +pageNum ? { y: -8 } : {};
  return (
    <motion.button
      type='button'
      onClick={onClick}
      className={`
    rounded-md px-2 py-0.5 dark:text-white md:px-4
    md:py-1.5
    ${
      activePage === +pageNum
        ? 'cursor-not-allowed bg-blue-600 text-white dark:bg-blue-400'
        : 'cursor-pointer'
    }`}
      whileTap={activePage !== +pageNum ? { scale: 0.9 } : {}}
      whileHover={animateY}
      whileFocus={animateY}
    >
      {children}
    </motion.button>
  );
};
