import { FormEvent, useState } from 'react';

import { clsxm } from '@/lib/clsxm';
import { useChangeParams } from '@/hooks/useChangeParams';
import { useActivePage, useSearchedValue } from '@/hooks/useContexts';
import { useResults } from '@/hooks/useResults';
import { useSSRAccentColor } from '@/hooks/useSSRAccentColor';
import { borderColors } from '@/utils/colorsData';

import { Input } from '@/components/atoms/Input';
import { ResetButton } from '@/components/atoms/ResetButton';
import { SearchButton } from '@/components/atoms/SearchButton';

export const SearchForm = () => {
  const [inputValue, setInputValue] = useState('');
  const { setSearchedValue } = useSearchedValue();
  const { activePage, setActivePage } = useActivePage();
  const { changeParams } = useChangeParams();
  const { fetchedRepos, fetchedUsers } = useResults(inputValue, activePage, true);

  const { accentColor } = useSSRAccentColor();

  const handleSubmit = (formEv: FormEvent) => {
    formEv.preventDefault();
    setSearchedValue(inputValue);
    setActivePage(1);
    changeParams(inputValue, activePage);
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
      className={clsxm(
        borderColors[accentColor],
        'col-span-2 row-start-2 flex justify-end self-center justify-self-center overflow-hidden rounded-md border py-0 md:w-auto lg:col-auto lg:ml-auto lg:justify-self-end'
      )}
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
      <SearchButton inputValue={inputValue} />
    </form>
  );
};
