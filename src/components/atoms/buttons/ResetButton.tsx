import { motion } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';

import { clsxm } from '@/lib/clsxm';

type ResetButtonProps = {
  inputValue: string;
};

export const ResetButton = ({ inputValue }: ResetButtonProps) => {
  return (
    <motion.button
      type='reset'
      data-testid='reset-btn'
      whileFocus={{ scale: 0.8 }}
      disabled={inputValue === '' ? true : false}
      className={clsxm(
        'hidden px-2 text-slate-200 transition-colors focus:text-slate-600 focus:outline-4 focus:outline-offset-2 enabled:hover:bg-slate-200 enabled:hover:text-slate-600 enabled:focus:bg-slate-200 disabled:cursor-not-allowed disabled:text-slate-300 md:inline md:text-3xl'
      )}
    >
      <IoMdClose />
    </motion.button>
  );
};
