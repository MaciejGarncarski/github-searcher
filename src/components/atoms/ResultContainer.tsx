import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const variants = {
  initial: {
    y: 30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

export const ResultContainer = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={variants.initial}
      animate={variants.animate}
      className='grid w-full min-h-user px-2 lg:px-4 py-4 grid-cols-user gap-x-3 gap-y-2 border-t-2 border-slate-300'
    >
      {children}
    </motion.div>
  );
};
