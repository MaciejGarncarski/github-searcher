import { FormEvent } from 'react';

import { useActivePage } from '@/hooks/useActivePage';
import { useSearchValue } from '@/hooks/useSearchValue';

type InputProps = {
  type: 'text' | 'number' | 'search' | 'reset' | 'password' | 'email';
  placeholder?: string;
  className?: string;
};

export const Input = ({ type, placeholder, className = '' }: InputProps) => {
  const { searchedValue, setSearchedValue } = useSearchValue();

  const { setActivePage } = useActivePage();

  const onInput = (event: FormEvent) => {
    const target = event.target as HTMLInputElement;
    setActivePage(1);
    setSearchedValue(target.value);
  };

  const commonClasses = 'px-2 py-1 border-none lg:text-xl';

  if (type === 'reset') {
    return (
      <input
        type={type}
        disabled={searchedValue === ''}
        className={`
        ${commonClasses}
        ${className}
        ${searchedValue === '' && 'hidden'}
        bg-gray-200
        text-black transition-colors hover:cursor-pointer hover:bg-gray-50
        `}
      />
    );
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${commonClasses} placeholder:text-white  ${className}`}
      value={searchedValue}
      onInput={onInput}
    />
  );
};
