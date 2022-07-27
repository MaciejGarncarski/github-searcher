import { FormEvent } from 'react';

import { useSearchValue } from '@/hooks/useContexts';

import { Input } from '@/components/atoms/Input';

export const Form = () => {
  const { setSearchedValue } = useSearchValue();

  const handleReset = () => {
    setSearchedValue('');
  };

  return (
    <form
      className='col-span-2 flex justify-end justify-self-center overflow-hidden rounded border border-slate-200 lg:col-auto lg:ml-auto lg:justify-self-end'
      onReset={handleReset}
      onSubmit={(formEv: FormEvent) => formEv.preventDefault()}
    >
      <Input type='text' placeholder='Search' />
      <Input type='reset' />
    </form>
  );
};
