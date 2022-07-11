import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

type ResultContainerProps = {
  children: ReactNode;
  className?: string;
};

export const containerVariants: Variants = {
  initial: {
    x: -60,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.25,
      mass: 1.2,
      type: 'spring',
    },
  },
};

export const ResultContainer = ({
  children,
  className,
}: ResultContainerProps) => {
  return (
    <motion.article
      variants={containerVariants}
      className={`grid min-h-user w-full grid-cols-user gap-x-3 gap-y-4 border-t-2 border-gray-300 px-2 py-4 lg:px-4 ${className}`}
    >
      {children}
    </motion.article>
  );
};
