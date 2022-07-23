import { motion } from 'framer-motion';
import { FormEvent } from 'react';
import { RiCloseLine } from 'react-icons/ri';

import { useActivePage, useSearchValue } from '@/hooks/useContexts';

type InputProps = {
  type: 'text' | 'number' | 'search' | 'reset' | 'password' | 'email';
  placeholder?: string;
};

export const Input = ({ type, placeholder }: InputProps) => {
  const { searchedValue, setSearchedValue } = useSearchValue();

  const { setActivePage } = useActivePage();

  const onInput = (event: FormEvent) => {
    const target = event.target as HTMLInputElement;
    setActivePage(1);
    setSearchedValue(target.value);
  };

  const isInputEmpty = searchedValue === '';

  if (type === 'reset') {
    return (
      <motion.button
        type={type}
        disabled={searchedValue === ''}
        whileTap={{ scale: 0.9 }}
        className={`cursor-pointer  bg-gray-200 px-2 transition-colors hover:bg-slate-500 hover:text-white ${
          isInputEmpty ? 'hidden' : ''
        }`}
      >
        <RiCloseLine size={32} />
      </motion.button>
    );
  }

  return (
    <motion.input
      type={type}
      placeholder={placeholder}
      className={` border-gray-200 bg-transparent text-white transition-colors placeholder:text-gray-200 hover:bg-slate-500 focus:bg-slate-500 md:text-xl ${
        isInputEmpty ? '' : 'border-r-2'
      }`}
      value={searchedValue}
      onInput={onInput}
    />
  );
};
