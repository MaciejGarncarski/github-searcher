import { useContext } from 'react';

import { ActivePageContext } from '@/contexts/activePageContext';
import { SearchContext } from '@/contexts/searchedValueContext';
import { SettingsContext } from '@/contexts/settingsContext';

export const useActivePage = () => {
  const context = useContext(ActivePageContext);
  if (context === undefined) {
    throw new Error('useActivePage must be used within a ActivePageProvider');
  }
  return context;
};

export const useSearchedValue = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error(
      'useSearchValue must be used within a SearchContextProvider'
    );
  }
  return context;
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error(
      'useSearchValue must be used within a SearchContextProvider'
    );
  }
  return context;
};
