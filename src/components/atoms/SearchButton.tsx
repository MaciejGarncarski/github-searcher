import { motion } from 'framer-motion';
import { AiOutlineSearch } from 'react-icons/ai';

import { clsxm } from '@/lib/clsxm';
import { useSearchedValue } from '@/hooks/useContexts';
import { useSSRAccentColor } from '@/hooks/useSSRAccentColor';
import { tagColors } from '@/utils/colorsData';

type SearchButtonProps = {
  inputValue: string;
};

export const SearchButton = ({ inputValue }: SearchButtonProps) => {
  const { searchedValue } = useSearchedValue();
  const { accentColor } = useSSRAccentColor();
  const isDisabled = searchedValue === '' && inputValue === '';

  return (
    <motion.button
      type='submit'
      whileFocus={{ scale: 0.8 }}
      disabled={isDisabled}
      className={clsxm(
        tagColors[accentColor],
        ' px-2 text-slate-900 hover:transition-colors enabled:hover:border-slate-700 enabled:hover:bg-slate-600 enabled:hover:text-slate-200 enabled:focus:border-slate-700 enabled:focus:bg-slate-200 enabled:focus:text-slate-600 disabled:cursor-not-allowed'
      )}
    >
      <AiOutlineSearch size={32} />
    </motion.button>
  );
};
