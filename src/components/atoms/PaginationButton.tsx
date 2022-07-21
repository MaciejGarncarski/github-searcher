import { motion } from 'framer-motion';
import { MouseEventHandler, ReactNode } from 'react';

interface PaginationButtonProps {
  disabled?: boolean;
  onClick: MouseEventHandler;
  children: ReactNode;
}

export const PaginationButton = ({
  disabled,
  onClick,
  children,
}: PaginationButtonProps) => {
  return (
    <motion.button
      type='button'
      className='flex items-center gap-2 justify-self-center hover:cursor-pointer 
      enabled:text-blue-600
      disabled:cursor-not-allowed
      disabled:opacity-50 dark:text-white
      dark:enabled:text-blue-400
      '
      disabled={disabled}
      onClick={onClick}
      whileTap={{ scale: 0.9 }}
      whileHover={!disabled ? { scale: 1.08 } : {}}
    >
      {children}
    </motion.button>
  );
};
