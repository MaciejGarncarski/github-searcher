import { createContext, ReactNode, useState } from 'react';

type ActivePageContextProps = {
  activePage: number;
  setActivePage: (number: number) => void;
};

const contextDefaultValues: ActivePageContextProps = {
  activePage: 1,
  setActivePage: () => null,
};

export const ActivePageContext =
  createContext<ActivePageContextProps>(contextDefaultValues);

export const ActivePageProvider = ({ children }: { children: ReactNode }) => {
  const [activePage, setActivePage] = useState(1);

  const value = {
    activePage,
    setActivePage,
  };

  return (
    <ActivePageContext.Provider value={value}>
      {children}
    </ActivePageContext.Provider>
  );
};
