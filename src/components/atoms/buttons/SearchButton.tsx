import { motion } from 'framer-motion';
import { AiOutlineSearch } from 'react-icons/ai';

import { clsxm } from '@/lib/clsxm';
import { useSSRAccentColor } from '@/hooks/useSSRAccentColor';
import { BUTTON_COLORS } from '@/utils/colorsData';

export const SearchButton = () => {
  const { accentColor } = useSSRAccentColor();

  return (
    <motion.button
      type='submit'
      id='search-btn'
      whileFocus={{ scale: 0.8, borderRadius: '8px' }}
      className={clsxm(
        BUTTON_COLORS[accentColor],
        'border-transparent px-3 text-2xl text-slate-700 focus:outline-2 focus:outline-offset-4 disabled:cursor-not-allowed md:text-3xl'
      )}
    >
      <span className='hidden' aria-hidden='true'>
        Search
      </span>
      <AiOutlineSearch />
    </motion.button>
  );
};
