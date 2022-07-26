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
        className={`cursor-pointer  bg-slate-200 px-2 transition-colors hover:bg-slate-600 hover:text-white ${
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
      className={`placeholder:text-slate-200-200 border-slate-200 bg-transparent text-xl text-white transition-colors hover:bg-slate-600 focus:bg-slate-600 md:text-2xl ${
        isInputEmpty ? '' : 'border-r-2'
      }`}
      value={searchedValue}
      onInput={onInput}
    />
  );
};
