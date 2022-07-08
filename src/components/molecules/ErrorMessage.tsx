import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
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
      variants={containerVariants}
      initial='initial'
      animate='animate'
      exit='initial'
      className='min-h-state-messsage grid place-content-center text-5xl lg:text-6xl mx-10 text-center overflow-hidden'
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
        className='text-7xl lg:text-8xl mt-10'
      >
        {emoji}
      </motion.span>
    </motion.div>
  );
};
