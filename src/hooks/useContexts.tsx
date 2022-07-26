import { useContext } from 'react';

import { ActivePageContext } from '@/contexts/activePageContext';
import { SearchContext } from '@/contexts/searchValueContext';

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
