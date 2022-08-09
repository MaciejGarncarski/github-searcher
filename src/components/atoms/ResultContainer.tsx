import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

import { clsxm } from '@/lib/clsxm';

type ResultContainerProps = {
  children: ReactNode;
  className?: string;
};

export const ResultContainer = ({ children, className = '' }: ResultContainerProps) => {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={clsxm(
        className,
        'grid min-h-user w-full grid-cols-user gap-x-3 gap-y-4 border-t-2 border-slate-400 px-3 py-8 dark:text-slate-200 lg:px-6 lg:py-10'
      )}
    >
      {children}
    </motion.article>
  );
};
