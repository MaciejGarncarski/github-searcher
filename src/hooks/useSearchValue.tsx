import { useContext } from 'react';

import { SearchContext } from '@/contexts/searchValue-context';

export const useSearchValue = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error(
      'useSearchValue must be used within a SearchContextProvider'
    );
  }
  return context;
};
