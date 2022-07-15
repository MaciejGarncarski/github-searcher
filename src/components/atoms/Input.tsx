import { motion } from 'framer-motion';
import { FormEvent, useEffect, useState } from 'react';

import { useActivePage } from '@/hooks/useActivePage';

type InputProps = {
  setSearchedValue: (value: string) => void;
};

export const Input = ({ setSearchedValue }: InputProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    setSearchedValue(inputValue);
  }, [inputValue, setSearchedValue]);

  const { setActivePage } = useActivePage();

  const onInput = (event: FormEvent) => {
    const target = event.target as HTMLInputElement;
    setActivePage(1);
    setInputValue(target.value);
  };

  return (
    <motion.input
      whileFocus={{ scaleX: 1.06 }}
      whileHover={{ scaleX: 1.06 }}
      type='search'
      placeholder='Search'
      className='border-1 w-40 rounded border-white bg-transparent px-3 py-2 text-white placeholder:text-white lg:w-auto'
      value={inputValue}
      onInput={onInput}
    />
  );
};
