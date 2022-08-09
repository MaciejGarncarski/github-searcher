import { useRouter } from 'next/router';
import { ReactNode, useMemo } from 'react';
import { createContext, useState } from 'react';

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

  const memoizedValue = useMemo(
    () => ({
      activePage,
      setActivePage,
    }),
    [activePage]
  );

  return <ActivePageContext.Provider value={memoizedValue}>{children}</ActivePageContext.Provider>;
};
