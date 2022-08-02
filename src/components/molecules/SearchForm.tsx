import { useRouter } from 'next/router';
import { FormEvent } from 'react';

import { useActivePage, useSearchedValue } from '@/hooks/useContexts';
import { useSearch } from '@/hooks/useSearch';

import { Input } from '@/components/atoms/Input';
import { ResetButton } from '@/components/atoms/ResetButton';
import { SearchButton } from '@/components/atoms/SearchButton';

export const SearchForm = () => {
  const { searchedValue, setSearchedValue } = useSearchedValue();
  const { replace } = useRouter();
  const { activePage, setActivePage } = useActivePage();
  const { fetchUsers, fetchRepos } = useSearch();

  const redirect = () => {
    if (searchedValue.trim() !== '') {
      replace(`/?q=${searchedValue}&page=${activePage}`, undefined, {
        shallow: true,
      });
    }

    if (searchedValue.trim() === '') {
      replace(`/?page=${activePage}`, undefined, {
        shallow: true,
      });
    }
  };

  const refetchData = () => {
    fetchUsers.refetch();
    fetchRepos.refetch();
  };

  const handleSearch = () => {
    setActivePage(1);
    redirect();
    refetchData();
  };

  const handleSubmit = (formEv: FormEvent) => {
    formEv.preventDefault();
  };

  const handleReset = () => {
    setSearchedValue('');
  };

  return (
    <form
      className='col-span-2 row-start-2 flex justify-end gap-x-2 self-center justify-self-center overflow-hidden rounded-md border border-slate-200 py-0 md:w-auto lg:col-auto lg:ml-auto lg:justify-self-end'
      onReset={handleReset}
      onSubmit={handleSubmit}
    >
      <Input type='text' placeholder='Search' />
      <SearchButton onClick={handleSearch} />
      <ResetButton />
    </form>
  );
};
