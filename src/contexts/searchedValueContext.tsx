import { useRouter } from 'next/router';
import { createContext, ReactNode, useState } from 'react';

import { StringGuard } from '@/utils/StringGuard';

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
  const router = useRouter();
  const { q } = router.query;

  const [searchedValue, setSearchedValue] = useState<string>(StringGuard(q));

  const value = {
    searchedValue,
    setSearchedValue,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
