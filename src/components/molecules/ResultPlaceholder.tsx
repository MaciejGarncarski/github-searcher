import { motion, Variants } from 'framer-motion';

import { ResultContainer } from '@/components/atoms/ResultContainer';

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

export const ResultSkeleton = () => {
  return (
    <ResultContainer>
      <div className=' bg-slate-300 h-8 w-8 rounded-full'></div>
      <div className='col-start-2 col-end-3 bg-slate-300 rounded-lg w-full md:max-w-sm'></div>
      <div className='col-start-2 col-end-3 bg-slate-300 h-8 rounded-lg w-4/5 md:max-w-md'></div>
      <div className='flex gap-2 md:gap-4 col-start-2 col-end-3 h-7 md:h-8'>
        {[...Array(3).keys()].map((el) => {
          return (
            <div
              className='bg-slate-300 rounded-lg w-10 md:w-24'
              key={el}
            ></div>
          );
        })}
      </div>
    </ResultContainer>
  );
};

export const ResultPlaceholder = ({
  placeholderAmount = 3,
}: {
  placeholderAmount: number;
}) => {
  return (
    <motion.section
      variants={placeholderVariants}
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
      className='mx-6 xl:mx-20 my-7 flex flex-col animate-pulse'
    >
      <span className='bg-slate-300 w-48 m-4 h-10 rounded-md'></span>
      {Array.from({ length: placeholderAmount }, (_, number: number) => {
        return <ResultSkeleton key={number} />;
      })}
    </motion.section>
  );
};
