import type { Variant } from 'framer-motion';
import { motion } from 'framer-motion';
import { MouseEventHandler } from 'react';
import { IoMdClose } from 'react-icons/io';

import { clsxm } from '@/lib/clsxm';

type DeleteHistoryButtonProps = {
  onClick: MouseEventHandler;
  className?: string;
};

const animation: Variant = {
  rotate: 90,
};

export const CrossButton = ({ onClick, className, ...rest }: DeleteHistoryButtonProps) => {
  return (
    <motion.button
      type='button'
      whileHover={animation}
      whileFocus={animation}
      transition={{
        duration: 0.55,
        bounce: 0.075,
        stiffness: 120,
        damping: 12,
        type: 'spring',
      }}
      onClick={onClick}
      className={clsxm(
        'flex justify-center rounded-full p-2 text-2xl text-slate-200 hover:bg-slate-500 focus:bg-slate-500',
        className
      )}
      {...rest}
    >
      <IoMdClose className='pointer-events-none' />
    </motion.button>
  );
};
