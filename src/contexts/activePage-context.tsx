import { useRouter } from 'next/router';
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
  const router = useRouter();

  const pageQuery =
    typeof router.query.page === 'string' ? +router.query.page : 1;

  const activePageQuery = pageQuery >= 1 ? pageQuery : 1;

  const [activePage, setActivePage] = useState<number>(activePageQuery);

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
