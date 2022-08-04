import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';

import { Text } from '@/components/atoms/Text';

const errorVariants: Variants = {
  initial: {
    y: 200,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      stiffness: 90,
      damping: 20,
      type: 'spring',
    },
  },
};

type ErrorMessageProps = {
  error: string;
  emoji?: string;
};

export const ErrorMessage = ({ error = 'Error', emoji = '🌋' }: ErrorMessageProps) => {
  return (
    <motion.section variants={errorVariants} initial='initial' animate='animate' exit='initial'>
      <Text
        type='h2'
        className='mx-10 grid min-h-state-messsage place-content-center text-center text-5xl dark:text-white  lg:text-6xl'
      >
        {error}
        <motion.span
          initial={{ rotate: 100 }}
          animate={{
            rotate: [100, -50, 0],
            transition: {
              duration: 1.5,
              delay: 0.3,
              type: 'spring',
              bounce: 0.3,
            },
          }}
          className='mt-10 text-7xl  lg:text-8xl'
        >
          {emoji}
        </motion.span>
      </Text>
    </motion.section>
  );
};
