import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';

import { useActivePage, useSearchedValue } from '@/hooks/useContexts';
import { useResults } from '@/hooks/useResults';

import { Input } from '@/components/atoms/Input';
import { ResetButton } from '@/components/atoms/ResetButton';
import { SearchButton } from '@/components/atoms/SearchButton';

export const SearchForm = () => {
  const [inputValue, setInputValue] = useState('');
  const { searchedValue, setSearchedValue } = useSearchedValue();
  const { activePage, setActivePage } = useActivePage();
  const router = useRouter();

  const { fetchedRepos, fetchedUsers } = useResults(
    inputValue,
    activePage,
    true
  );

  const redirect = () => {
    if (searchedValue.trim() !== '') {
      router.replace(`/?q=${inputValue}&page=${activePage}`, undefined, {
        shallow: true,
      });
    }

    if (searchedValue.trim() === '') {
      router.replace(`/?page=${activePage}`, undefined, {
        shallow: true,
      });
    }
  };

  const handleSubmit = (formEv: FormEvent) => {
    formEv.preventDefault();
    setSearchedValue(inputValue);
    setActivePage(1);
    redirect();
    setTimeout(() => {
      fetchedRepos.refetch();
      fetchedUsers.refetch();
    }, 1000);
  };

  const handleReset = () => {
    setInputValue('');
  };

  return (
    <form
      className='col-span-2 row-start-2 flex justify-end self-center justify-self-center overflow-hidden rounded-md border border-slate-200 py-0 md:w-auto lg:col-auto lg:ml-auto lg:justify-self-end'
      onReset={handleReset}
      onSubmit={handleSubmit}
    >
      <Input
        type='text'
        placeholder='Search'
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <ResetButton inputValue={inputValue} />
      <SearchButton />
    </form>
  );
};
