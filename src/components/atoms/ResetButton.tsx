import { motion } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';

import { useSearchedValue } from '@/hooks/useContexts';

export const ResetButton = () => {
  const { searchedValue } = useSearchedValue();

  return (
    <motion.button
      type='reset'
      data-testid='reset-btn'
      disabled={searchedValue === '' ? true : false}
      whileTap={{ scale: 0.9 }}
      className={`cursor-pointer bg-slate-200 px-2 text-slate-900  transition-colors disabled:cursor-not-allowed disabled:bg-slate-600 disabled:text-slate-200 ${
        searchedValue === '' ? '' : 'hover:bg-slate-500 hover:text-white'
      }`}
    >
      <IoMdClose size={32} />
    </motion.button>
  );
};
