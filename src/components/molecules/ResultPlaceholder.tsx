import { motion } from 'framer-motion';

import { ResultContainer } from '@/components/atoms/ResultContainer';

const bgColors = 'bg-slate-300 dark:bg-slate-500';

export const ResultSkeleton = () => {
  return (
    <ResultContainer>
      <div className={` h-8 w-8 rounded-full ${bgColors}`}></div>
      <div
        className={`col-start-2 col-end-3 w-full rounded-lg ${bgColors} md:max-w-sm`}
      ></div>
      <div
        className={`col-start-2 col-end-3 h-8 w-4/5 rounded-lg ${bgColors} md:max-w-md`}
      ></div>
      <div className='col-start-2 col-end-3 flex h-7 gap-2 md:h-8 md:gap-4'>
        {[...Array(3).keys()].map((el) => {
          return (
            <div
              className={`w-10 rounded-lg ${bgColors} md:w-24`}
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
    <motion.section className='mx-6 my-7 flex animate-pulse flex-col xl:mx-20'>
      <span className={`m-4 h-10 w-48 rounded-md ${bgColors}`}></span>
      {Array.from({ length: placeholderAmount }, (_, number: number) => {
        return <ResultSkeleton key={number} />;
      })}
    </motion.section>
  );
};
