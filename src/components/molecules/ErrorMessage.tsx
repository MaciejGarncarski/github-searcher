import { motion, Variants } from 'framer-motion';

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

export const ErrorMessage = ({
  error = 'Error',
  emoji = '🌋',
}: ErrorMessageProps) => {
  return (
    <motion.div
      variants={errorVariants}
      initial='initial'
      animate='animate'
      exit='initial'
      className='mx-10 grid min-h-state-messsage place-content-center overflow-hidden text-center text-5xl lg:text-6xl'
    >
      {error}
      <br />
      <motion.span
        initial={{ rotate: -360 }}
        animate={{
          rotate: 0,
          transition: {
            duration: 1.5,
            delay: 0.3,
            type: 'spring',
            bounce: 0.3,
          },
        }}
        className='mt-10 text-7xl lg:text-8xl'
      >
        {emoji}
      </motion.span>
    </motion.div>
  );
};
