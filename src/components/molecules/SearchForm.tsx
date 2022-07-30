import { FormEvent } from 'react';

import { useSearchedValue } from '@/hooks/useContexts';

import { Input } from '@/components/atoms/Input';

export const SearchForm = () => {
  const { setSearchedValue } = useSearchedValue();

  const handleReset = () => {
    setSearchedValue('');
  };

  return (
    <form
      className='col-span-2 row-start-2 flex w-full justify-end self-center justify-self-center overflow-hidden rounded-md border border-slate-200 py-0 md:w-auto lg:col-auto lg:ml-auto lg:justify-self-end'
      onReset={handleReset}
      onSubmit={(formEv: FormEvent) => formEv.preventDefault()}
    >
      <Input type='text' placeholder='Search' />
      <Input type='reset' />
    </form>
  );
};
