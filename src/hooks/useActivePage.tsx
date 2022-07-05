import { useContext } from 'react';

import { ActivePageContext } from '@/contexts/activePage-context';

export const useActivePage = () => {
  const context = useContext(ActivePageContext);
  if (context === undefined) {
    throw new Error('useActivePage must be used within a ActivePageProvider');
  }
  return context;
};
