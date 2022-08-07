import { motion } from 'framer-motion';
import { FormEventHandler } from 'react';

type InputProps = {
  type: JSX.IntrinsicElements['input']['type'];
  inputValue: string;
  placeholder?: string;
  required?: boolean;
  onInput?: FormEventHandler<HTMLInputElement>;
  autoComplete?: 'true' | 'false';
};

export const Input = ({
  type,
  placeholder,
  onInput,
  inputValue,
  required,
  autoComplete,
}: InputProps) => {
  return (
    <motion.input
      data-focus='true'
      type={type}
      autoComplete={autoComplete}
      required={required}
      placeholder={placeholder}
      className='peer w-full rounded-l-md border-2 border-transparent bg-transparent text-xl text-white placeholder:text-slate-200 hover:bg-slate-600 focus:border-slate-200 dark:bg-slate-700 md:text-2xl'
      value={inputValue}
      onInput={onInput}
    />
  );
};
