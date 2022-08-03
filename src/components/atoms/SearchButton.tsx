import { motion } from 'framer-motion';
import { AiOutlineSearch } from 'react-icons/ai';

export const SearchButton = () => {
  return (
    <motion.button
      type='submit'
      whileFocus={{ scale: 0.9 }}
      className=' bg-slate-200 px-2 text-slate-600 transition-colors hover:border-slate-700 hover:bg-slate-600 hover:text-slate-200 focus:border-slate-700 focus:bg-slate-200 focus:text-slate-600'
    >
      <AiOutlineSearch size={32} />
    </motion.button>
  );
};
