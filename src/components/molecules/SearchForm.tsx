import { FormEvent, useState } from 'react';

import { clsxm } from '@/lib/clsxm';
import { useChangeParams } from '@/hooks/useChangeParams';
import { useActivePage, useSearchedValue } from '@/hooks/useContexts';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useResults } from '@/hooks/useResults';
import { useSSRAccentColor } from '@/hooks/useSSRAccentColor';
import { BORDER_COLORS } from '@/utils/colorsData';
import { setSearchHistory } from '@/utils/setSearchHistory';

import { ResetButton } from '@/components/atoms/buttons/ResetButton';
import { SearchButton } from '@/components/atoms/buttons/SearchButton';
import { Input } from '@/components/atoms/Input';
import { SearchHistory } from '@/components/molecules/SearchHistory';

export const SearchForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [history, setHistory] = useLocalStorage<string[]>('searchHistory', []);

  const { setSearchedValue, searchedValue } = useSearchedValue();
  const { activePage, setActivePage } = useActivePage();
  const { changeParams } = useChangeParams();
  const { fetchedRepos, fetchedUsers } = useResults(searchedValue, activePage, true);

  const { accentColor } = useSSRAccentColor();

  const handleSubmit = (formEv: FormEvent) => {
    formEv.preventDefault();

    if (inputValue.trim() === '') {
      return;
    }

    setSearchedValue(inputValue.trim());
    setSearchHistory(inputValue, history, setHistory);

    setActivePage(1);
    changeParams(inputValue.trim(), activePage);
    setTimeout(() => {
      fetchedRepos.refetch();
      fetchedUsers.refetch();
    }, 1000);
  };

  const onInput = (event: FormEvent) => {
    const target = event.target as HTMLInputElement;
    setInputValue(target.value);
  };

  const handleReset = () => {
    setInputValue('');
  };

  return (
    <form
      className={clsxm(
        BORDER_COLORS[accentColor],
        'search-form',
        'relative col-span-2 row-start-2 flex justify-end self-center justify-self-center rounded-md border py-0 md:w-auto md:border-2 lg:col-auto lg:ml-auto lg:justify-self-end'
      )}
      onReset={handleReset}
      onSubmit={handleSubmit}
    >
      <Input type='text' placeholder='Search' inputValue={inputValue} onInput={onInput} />
      <SearchHistory historyData={history} setHistory={setHistory} setInputValue={setInputValue} />
      <ResetButton inputValue={inputValue} />
      <SearchButton inputValue={inputValue} />
    </form>
  );
};
