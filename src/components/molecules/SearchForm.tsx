import { FormEvent, useState } from 'react';

import { clsxm } from '@/lib/clsxm';
import { useChangeParams } from '@/hooks/useChangeParams';
import { useActivePage, useSearchedValue } from '@/hooks/useContexts';
import { useInputFocus } from '@/hooks/useInputFocus';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useSSRAccentColor } from '@/hooks/useSSRAccentColor';
import { BORDER_COLORS } from '@/utils/colorsData';
import { setSearchHistory } from '@/utils/setSearchHistory';

import { ResetButton } from '@/components/atoms/buttons/ResetButton';
import { SearchButton } from '@/components/atoms/buttons/SearchButton';
import { Input } from '@/components/atoms/Input';
import { SearchHistory } from '@/components/molecules/SearchHistory';

export const SearchForm = () => {
  const { searchedValue, setSearchedValue } = useSearchedValue();
  const { setActivePage } = useActivePage();
  const { changeParams } = useChangeParams();
  const { accentColor } = useSSRAccentColor();

  const [history, setHistory] = useLocalStorage<string[]>('searchHistory', []);
  const [inputValue, setInputValue] = useState<string>(searchedValue);
  const [inputFocus] = useInputFocus();

  const handleSubmit = (formEv: FormEvent) => {
    formEv.preventDefault();

    setSearchedValue(inputValue.trim());
    setActivePage(1);
    changeParams(inputValue.trim(), 1);
    setSearchHistory(inputValue, history, setHistory);
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
        'relative col-span-2 row-start-2 flex justify-end self-center justify-self-center rounded-md border py-0 transition md:w-auto md:border-2 lg:col-auto lg:ml-auto lg:justify-self-end'
      )}
      onReset={handleReset}
      onSubmit={handleSubmit}
    >
      <Input type='text' placeholder='Search' inputValue={inputValue} onInput={onInput} />
      {inputFocus && (
        <SearchHistory
          historyData={history}
          setHistory={setHistory}
          inputFocus={inputFocus}
          setInputValue={setInputValue}
        />
      )}
      <ResetButton inputValue={inputValue} />
      <SearchButton />
    </form>
  );
};
