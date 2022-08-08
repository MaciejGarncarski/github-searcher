import type { Variant } from 'framer-motion';
import { motion } from 'framer-motion';
import { MouseEventHandler } from 'react';
import { IoMdClose } from 'react-icons/io';

type DeleteHistoryButtonProps = {
  onClick: MouseEventHandler;
};

const animation: Variant = {
  rotate: -90,
  transition: {
    duration: 0.55,
    type: 'spring',
  },
};

export const DeleteHistoryButton = ({ onClick }: DeleteHistoryButtonProps) => {
  return (
    <motion.button
      type='button'
      data-focus='true'
      whileHover={animation}
      whileFocus={animation}
      onClick={onClick}
      className='flex justify-center rounded-full p-2 text-2xl text-slate-200 hover:bg-slate-500 focus:bg-slate-500 md:text-3xl'
    >
      <IoMdClose data-focus='true' className='pointer-events-none' />
    </motion.button>
  );
};
