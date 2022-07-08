import { FormEvent, useEffect, useState } from 'react';

import { useActivePage } from '@/hooks/useActivePage';

type InputProps = {
  setSearchedValue: (value: string) => void;
};

export const Input = ({ setSearchedValue }: InputProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  const { setActivePage } = useActivePage();

  useEffect(() => {
    setSearchedValue(inputValue);
  }, [inputValue, setSearchedValue]);

  const onInput = (event: FormEvent) => {
    const target = event.target as HTMLInputElement;
    setActivePage(1);
    setInputValue(target.value);
  };

  return (
    <input
      type='search'
      placeholder='Search'
      className='w-40 lg:w-auto px-3 py-2 bg-transparent rounded border-1 border-white text-white placeholder:text-white'
      value={inputValue}
      onInput={onInput}
    />
  );
};
