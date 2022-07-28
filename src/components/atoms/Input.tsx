import { motion } from 'framer-motion';
import { FormEvent } from 'react';
import { RiCloseLine } from 'react-icons/ri';

import { useActivePage, useSearchedValue } from '@/hooks/useContexts';

type InputProps = {
  type: 'text' | 'number' | 'search' | 'reset' | 'password' | 'email';
  placeholder?: string;
};

export const Input = ({ type, placeholder }: InputProps) => {
  const { searchedValue, setSearchedValue } = useSearchedValue();

  const { setActivePage } = useActivePage();

  const onInput = (event: FormEvent) => {
    const target = event.target as HTMLInputElement;
    setActivePage(1);
    setSearchedValue(target.value);
  };

  if (type === 'reset') {
    return (
      <motion.button
        type='reset'
        disabled={searchedValue === ''}
        whileTap={{ scale: 0.9 }}
        className={`cursor-pointer bg-slate-200 px-2 text-slate-900  transition-colors disabled:cursor-not-allowed disabled:bg-slate-600 disabled:text-slate-200 ${
          searchedValue === '' ? '' : 'hover:bg-slate-600 hover:text-white'
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
      className='border-0 bg-transparent text-xl text-white transition-colors placeholder:text-slate-200 hover:bg-slate-600 focus:bg-slate-600 md:text-2xl'
      value={searchedValue}
      onInput={onInput}
    />
  );
};
