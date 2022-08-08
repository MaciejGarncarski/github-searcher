import { motion } from 'framer-motion';
import { AiOutlineSearch } from 'react-icons/ai';

import { clsxm } from '@/lib/clsxm';
import { useSSRAccentColor } from '@/hooks/useSSRAccentColor';
import { BUTTON_COLORS } from '@/utils/colorsData';

type SearchButtonProps = {
  inputValue: string;
};

export const SearchButton = ({ inputValue }: SearchButtonProps) => {
  const { accentColor } = useSSRAccentColor();
  const isDisabled = inputValue.trim() === '';

  return (
    <motion.button
      type='submit'
      id='search-btn'
      disabled={isDisabled}
      whileFocus={{ scale: 0.8, borderRadius: '8px' }}
      className={clsxm(
        BUTTON_COLORS[accentColor],
        'border-transparent px-3 text-2xl text-slate-700 opacity-70 transition focus:outline-2 focus:outline-offset-4 enabled:opacity-80 enabled:hover:opacity-100 disabled:cursor-not-allowed md:text-3xl'
      )}
    >
      <AiOutlineSearch />
    </motion.button>
  );
};
