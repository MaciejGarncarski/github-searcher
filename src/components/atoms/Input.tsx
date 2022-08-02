import { motion } from 'framer-motion';
import { FormEvent } from 'react';

import { useActivePage, useSearchedValue } from '@/hooks/useContexts';

type InputType =
  | 'text'
  | 'number'
  | 'search'
  | 'password'
  | 'email'
  | 'telephone';

type InputProps = {
  type: InputType;
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

  return (
    <motion.input
      type={type}
      placeholder={placeholder}
      className='w-full border-0 bg-transparent text-xl text-white transition-colors placeholder:text-slate-200 hover:bg-slate-600 focus:bg-slate-600 md:text-2xl'
      value={searchedValue}
      onInput={onInput}
    />
  );
};
