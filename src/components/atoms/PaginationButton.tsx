import { motion } from 'framer-motion';
import { MouseEventHandler, ReactNode } from 'react';

import { useMainColor } from '@/hooks/useContexts';
import { textColors } from '@/utils/colors';

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
  const { mainColor } = useMainColor();

  return (
    <motion.button
      type='button'
      className={`flex items-center gap-2 justify-self-center transition-colors 
      hover:cursor-pointer
      ${textColors[mainColor]}
      disabled:cursor-not-allowed
      disabled:opacity-50
      `}
      disabled={disabled}
      onClick={onClick}
      whileTap={{ scale: 0.9 }}
      whileFocus={{ scale: 1.08 }}
      whileHover={!disabled ? { scale: 1.08 } : {}}
    >
      {children}
    </motion.button>
  );
};
