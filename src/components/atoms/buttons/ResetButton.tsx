import { motion } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';

type ResetButtonProps = {
  inputValue: string;
};

export const ResetButton = ({ inputValue }: ResetButtonProps) => {
  return (
    <motion.button
      type='reset'
      id='reset-btn'
      data-testid='reset-btn'
      whileFocus={{ scale: 0.8, borderRadius: '8px' }}
      disabled={inputValue === '' ? true : false}
      className='hidden px-4 text-2xl text-slate-200 transition enabled:hover:bg-slate-500 enabled:focus:bg-slate-500 disabled:opacity-40 sm:inline'
    >
      <IoMdClose />
    </motion.button>
  );
};
