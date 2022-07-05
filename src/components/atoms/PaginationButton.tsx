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
      className='justify-self-center enabled:text-blue-600 hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 flex items-center gap-2'
      disabled={disabled}
      onClick={onClick}
      whileTap={{ scale: 0.9 }}
      whileHover={!disabled ? { scale: 1.08 } : {}}
    >
      {children}
    </motion.button>
  );
};
