import { motion } from 'framer-motion';
import { FormEvent } from 'react';

import { useActivePage } from '@/hooks/useActivePage';
import { useSearchValue } from '@/hooks/useSearchValue';

export const Input = () => {
  const { searchedValue, setSearchedValue } = useSearchValue();
  const { setActivePage } = useActivePage();

  const onInput = (event: FormEvent) => {
    const target = event.target as HTMLInputElement;
    setActivePage(1);
    setSearchedValue(target.value);
  };

  return (
    <motion.input
      whileFocus={{ scaleX: 1.06 }}
      whileHover={{ scaleX: 1.06 }}
      type='search'
      placeholder='Search'
      className='border-1 w-40 rounded border-white bg-transparent px-3 py-2 text-white placeholder:text-white lg:w-auto'
      value={searchedValue}
      onInput={onInput}
    />
  );
};
