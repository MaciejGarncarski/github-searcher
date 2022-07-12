import { motion } from 'framer-motion';

import { placeholderVariants } from '@/components/molecules/ResultPlaceholder';

export const UserProfilePlaceholder = () => {
  return (
    <motion.main
      variants={placeholderVariants}
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
      className='my-7 flex min-h-page animate-pulse flex-col items-center justify-center gap-6 md:gap-10'
    >
      <div className='col-start-2 col-end-3 h-8 w-3/5 rounded-lg bg-slate-300 md:max-w-md'></div>
      <div className='col-start-2 col-end-3 h-8 w-2/5 rounded-lg bg-slate-300 md:max-w-sm'></div>
      <div className=' h-48 w-48 rounded-full bg-slate-300'></div>
      <div className='md:h-100 col-start-2 col-end-3 flex h-10 gap-8 md:gap-4'>
        <div className='w-16 rounded-lg bg-slate-300 md:w-24'></div>
        <div className='w-16 rounded-lg bg-slate-300 md:w-24'></div>
        <div className='w-16 rounded-lg bg-slate-300 md:w-24'></div>
      </div>
    </motion.main>
  );
};
