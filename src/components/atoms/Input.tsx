import { FormEvent, useEffect, useState } from 'react';

type InputProps = {
  setSearchedValue: (value: string) => void;
};

export const Input = ({ setSearchedValue }: InputProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    setSearchedValue(inputValue);
  }, [inputValue, setSearchedValue]);

  const onInput = (event: FormEvent) => {
    const target = event.target as HTMLInputElement;

    setInputValue(target.value);
  };

  return (
    <input
      type='search'
      placeholder='Search'
      className='px-3 py-2 bg-transparent rounded-md border border-white text-white'
      value={inputValue}
      onInput={onInput}
    />
  );
};
