import { motion } from 'framer-motion';
import { Variants } from 'framer-motion';

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
    <motion.main
      variants={placeholderVariants}
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
      className='my-7 flex min-h-page animate-pulse flex-col items-center justify-center gap-6 md:gap-10'
    >
      <div
        className={`col-start-2 col-end-3 h-12 w-1/3 rounded-lg ${bgColors} lg:absolute lg:top-40 lg:left-44 lg:h-14 lg:w-36`}
      ></div>
      <div
        className={`col-start-2 col-end-3 h-8 w-2/5 rounded-lg ${bgColors} md:max-w-sm`}
      ></div>
      <div className={` h-44 w-44 rounded-full ${bgColors}`}></div>
      <div
        className={`col-start-2 col-end-3 h-8 w-3/5 rounded-lg ${bgColors} md:max-w-sm`}
      ></div>
      <div className='md:h-100 col-start-2 col-end-3 flex h-10 gap-8 md:gap-4'>
        <div className={`w-16 rounded-lg ${bgColors} md:w-24`}></div>
        <div className={`w-16 rounded-lg ${bgColors} md:w-24`}></div>
        <div className={`w-16 rounded-lg ${bgColors} md:w-24`}></div>
      </div>
    </motion.main>
  );
};
