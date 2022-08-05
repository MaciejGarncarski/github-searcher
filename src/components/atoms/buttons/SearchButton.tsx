import { motion } from 'framer-motion';
import { AiOutlineSearch } from 'react-icons/ai';

import { clsxm } from '@/lib/clsxm';
import { useSearchedValue } from '@/hooks/useContexts';
import { useSSRAccentColor } from '@/hooks/useSSRAccentColor';
import { BUTTON_COLORS } from '@/utils/colorsData';

type SearchButtonProps = {
  inputValue: string;
};

export const SearchButton = ({ inputValue }: SearchButtonProps) => {
  const { searchedValue } = useSearchedValue();
  const { accentColor } = useSSRAccentColor();
  const isDisabled = searchedValue.trim() === '' && inputValue.trim() === '';

  return (
    <motion.button
      type='submit'
      disabled={isDisabled}
      whileFocus={{ scale: 0.8 }}
      className={clsxm(
        BUTTON_COLORS[accentColor],
        'border-transparent px-2 text-2xl text-slate-900 hover:transition-colors focus:outline-2 focus:outline-offset-4 enabled:hover:border-slate-700 enabled:hover:bg-slate-600 enabled:hover:text-slate-200 enabled:focus:border-slate-200 disabled:cursor-not-allowed disabled:opacity-80 md:px-3 md:text-3xl'
      )}
    >
      <AiOutlineSearch />
    </motion.button>
  );
};
