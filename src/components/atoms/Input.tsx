import { motion } from 'framer-motion';
import { FormEvent } from 'react';

type InputType = 'text' | 'number' | 'search' | 'password' | 'email' | 'telephone';

type InputProps = {
  type: InputType;
  inputValue: string;
  setInputValue: (value: string) => void;
  placeholder?: string;
};

export const Input = ({ type, placeholder, setInputValue, inputValue }: InputProps) => {
  const onInput = (event: FormEvent) => {
    const target = event.target as HTMLInputElement;
    setInputValue(target.value);
  };

  return (
    <motion.input
      type={type}
      placeholder={placeholder}
      className='w-full border-0 bg-transparent text-xl text-white opacity-80 placeholder:text-slate-200 hover:bg-slate-600 focus:opacity-100 dark:bg-slate-700 md:text-2xl'
      value={inputValue}
      onInput={onInput}
    />
  );
};
