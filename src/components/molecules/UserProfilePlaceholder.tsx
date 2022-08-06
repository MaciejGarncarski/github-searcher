import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';

import { clsxm } from '@/lib/clsxm';

export const placeholderVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const bgColors = 'bg-slate-300 dark:bg-slate-600';

export const UserProfilePlaceholder = () => {
  return (
    <motion.div
      role='status'
      variants={placeholderVariants}
      initial='initial'
      animate='animate'
      className='mx-10 my-14 flex min-h-page animate-pulse flex-col items-center justify-center gap-14 lg:my-0 lg:gap-20 lg:text-4xl'
    >
      <div className='flex flex-col items-center justify-center gap-8 lg:flex-row'>
        <div className={clsxm(bgColors, 'h-48 w-48 rounded-full')}></div>
        <div className='flex flex-col items-center justify-center gap-4 lg:items-start'>
          <div className={clsxm(bgColors, 'h-12 w-96 rounded-md')}></div>
          <div className={clsxm(bgColors, 'h-10 w-64 rounded-md')}></div>
        </div>
      </div>
      <div className={clsxm(bgColors, 'h-10 w-96 rounded-md')}></div>
      <div className='flex max-w-prose flex-wrap items-center justify-center gap-8 '>
        <div className={clsxm(bgColors, 'h-10 w-36 rounded-md')}></div>
        <div className={clsxm(bgColors, 'h-10 w-36 rounded-md')}></div>
        <div className={clsxm(bgColors, 'h-10 w-36 rounded-md')}></div>
        <div className={clsxm(bgColors, 'h-10 w-36 rounded-md')}></div>
        <div className={clsxm(bgColors, 'h-10 w-36 rounded-md')}></div>
      </div>
    </motion.div>
  );
};
