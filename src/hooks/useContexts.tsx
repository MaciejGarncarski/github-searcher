import { useContext } from 'react';

import { ActivePageContext } from '@/contexts/activePage-context';
import { SearchContext } from '@/contexts/searchValue-context';

export const useActivePage = () => {
  const context = useContext(ActivePageContext);
  if (context === undefined) {
    throw new Error('useActivePage must be used within a ActivePageProvider');
  }
  return context;
};

export const useSearchValue = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error(
      'useSearchValue must be used within a SearchContextProvider'
    );
  }
  return context;
};
