import { useContext } from 'react';

import { ActivePageContext } from '@/contexts/activePageContext';
import { MainColorContext } from '@/contexts/mainColorContext';
import { SearchContext } from '@/contexts/searchedValueContext';

export const useActivePage = () => {
  const context = useContext(ActivePageContext);
  if (context === undefined || context === null) {
    throw new Error('useActivePage must be used within a ActivePageProvider');
  }
  return context;
};

export const useSearchedValue = () => {
  const context = useContext(SearchContext);
  if (context === undefined || context === null) {
    throw new Error(
      'useSearchValue must be used within a SearchContextProvider'
    );
  }
  return context;
};

export const useMainColor = () => {
  const context = useContext(MainColorContext);
  if (context === undefined || context === null) {
    throw new Error(
      'useSearchValue must be used within a SearchContextProvider'
    );
  }
  return context;
};
