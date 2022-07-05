import { motion } from 'framer-motion';
import { MouseEventHandler, ReactNode } from 'react';

type PaginationProgressProps = {
  children: ReactNode;
  pageNum: string;
  activePage: number;
  onClick: MouseEventHandler;
};

export const PaginationProgress = ({
  children,
  pageNum,
  activePage,
  onClick,
}: PaginationProgressProps) => {
  const animateY = activePage !== +pageNum ? { y: -8 } : {};
  return (
    <motion.button
      type='button'
      onClick={onClick}
      className={`
    px-2 py-0.5 md:px-4 md:py-1.5 rounded-md
    ${
      activePage === +pageNum
        ? 'bg-blue-600 text-white cursor-default'
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
