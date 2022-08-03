import { motion } from 'framer-motion';
import { AiOutlineSearch } from 'react-icons/ai';

import { useSearchedValue } from '@/hooks/useContexts';

type SearchButtonProps = {
  inputValue: string;
};

export const SearchButton = ({ inputValue }: SearchButtonProps) => {
  const { searchedValue } = useSearchedValue();

  const isDisabled = searchedValue === '' && inputValue === '';

  return (
    <motion.button
      type='submit'
      whileFocus={{ scale: 0.9 }}
      disabled={isDisabled}
      className='bg-slate-200 px-2 text-slate-600 transition-colors enabled:hover:border-slate-700 enabled:hover:bg-slate-600 enabled:hover:text-slate-200 enabled:focus:border-slate-700 enabled:focus:bg-slate-200 enabled:focus:text-slate-600 disabled:cursor-not-allowed'
    >
      <AiOutlineSearch size={32} />
    </motion.button>
  );
};
