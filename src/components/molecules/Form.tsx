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
      className='flex justify-end rounded border border-slate-200'
      onReset={handleReset}
      onSubmit={(formEv: FormEvent) => formEv.preventDefault()}
    >
      <Input type='search' placeholder='Search' />
      <Input type='reset' />
    </form>
  );
};
