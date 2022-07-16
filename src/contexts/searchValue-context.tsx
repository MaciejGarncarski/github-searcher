import { createContext, ReactNode, useState } from 'react';

type SearchContextProps = {
  searchedValue: string;
  setSearchedValue: (number: string) => void;
};

const contextDefaultValues: SearchContextProps = {
  searchedValue: '',
  setSearchedValue: () => null,
};

export const SearchContext =
  createContext<SearchContextProps>(contextDefaultValues);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchedValue, setSearchedValue] = useState<string>('');

  const value = {
    searchedValue,
    setSearchedValue,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
