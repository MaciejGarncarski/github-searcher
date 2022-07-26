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
    <motion.div
      role='status'
      variants={placeholderVariants}
      initial='initial'
      animate='animate'
      className='mx-8 mt-12 flex min-h-page animate-pulse flex-col items-center gap-7 lg:justify-center lg:gap-10 lg:text-4xl'
    >
      <div
        className={`col-start-2 col-end-3 h-12 w-1/3 rounded-lg ${bgColors} lg:absolute lg:top-40 lg:left-44 lg:h-14 lg:w-36`}
      ></div>
      <div
        className={`col-start-2 col-end-3 h-8 w-full rounded-lg opacity-90 ${bgColors} md:max-w-lg`}
      ></div>
      <div
        className={`col-start-2 col-end-3 h-8 w-2/3 rounded-lg opacity-60 ${bgColors} md:max-w-xs`}
      ></div>
      <div
        className={` h-44 w-44 rounded-full opacity-90 lg:h-52 lg:w-52 ${bgColors}`}
      ></div>
      <div
        className={`col-start-2 col-end-3 h-8 w-3/5 rounded-lg opacity-90 ${bgColors} md:max-w-sm`}
      ></div>
      <div className='col-start-2 col-end-3 flex flex-wrap justify-center gap-4 md:h-12 md:gap-8'>
        <div
          className={`w-24 rounded-lg ${bgColors} h-10  opacity-60 md:w-32`}
        ></div>
        <div
          className={`w-24 rounded-lg ${bgColors} h-10 opacity-60 md:w-32`}
        ></div>
        <div
          className={`w-24 rounded-lg ${bgColors} h-10 opacity-60 md:w-32`}
        ></div>
        <div
          className={`w-24 rounded-lg ${bgColors} h-10 opacity-60 md:w-32`}
        ></div>
      </div>
    </motion.div>
  );
};
