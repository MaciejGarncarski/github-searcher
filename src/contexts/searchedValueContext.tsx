import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import { createContext, useState } from 'react';

import { stringGuard } from '@/utils/stringGuard';

type SearchContextProps = {
  searchedValue: string;
  setSearchedValue: (number: string) => void;
};

const contextDefaultValues: SearchContextProps = {
  searchedValue: '',
  setSearchedValue: () => null,
};

export const SearchContext = createContext<SearchContextProps>(contextDefaultValues);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const { q } = router.query;

  const [searchedValue, setSearchedValue] = useState<string>(stringGuard(q));
  // console.log(q, searchedValue);

  const value = {
    searchedValue,
    setSearchedValue,
  };

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};
