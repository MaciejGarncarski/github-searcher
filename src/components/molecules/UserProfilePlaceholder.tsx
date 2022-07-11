import { motion, Variants } from 'framer-motion';

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

export const UserProfilePlaceholder = () => {
  return (
    <motion.main
      variants={placeholderVariants}
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
      className='min-h-page my-7 flex flex-col items-center justify-center animate-pulse gap-6 md:gap-10'
    >
      <div className='col-start-2 col-end-3 bg-slate-300 h-8 rounded-lg w-3/5 md:max-w-md'></div>
      <div className='col-start-2 col-end-3 bg-slate-300 h-8 rounded-lg w-2/5 md:max-w-sm'></div>
      <div className=' bg-slate-300 h-48 w-48 rounded-full'></div>
      <div className='flex gap-8 md:gap-4 col-start-2 col-end-3 h-10 md:h-100'>
        <div className='bg-slate-300 rounded-lg w-16 md:w-24'></div>
        <div className='bg-slate-300 rounded-lg w-16 md:w-24'></div>
        <div className='bg-slate-300 rounded-lg w-16 md:w-24'></div>
      </div>
    </motion.main>
  );
};
