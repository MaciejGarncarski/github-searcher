import { useRouter } from 'next/router';
import { createContext, ReactNode, useEffect, useState } from 'react';

type ActivePageContextProps = {
  activePage: number;
  setActivePage: (number: number) => void;
};

const contextDefaultValues: ActivePageContextProps = {
  activePage: 1,
  setActivePage: () => null,
};

export const ActivePageContext = createContext<ActivePageContextProps>(contextDefaultValues);

export const ActivePageProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { page } = router.query;

  const [activePage, setActivePage] = useState<number>(
    typeof page === 'string' ? parseInt(page, 10) : 1
  );

  useEffect(() => {
    setActivePage(typeof page === 'string' ? parseInt(page, 10) : 1);
  }, [page]);

  const value = {
    activePage,
    setActivePage,
  };

  return <ActivePageContext.Provider value={value}>{children}</ActivePageContext.Provider>;
};
