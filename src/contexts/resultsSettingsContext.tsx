import { ReactNode } from 'react';
import { createContext } from 'react';
import { useMemo } from 'react';

import { useLocalStorage } from '@/hooks/useLocalStorage';

type ResultsSettingsProps = {
  perPage: number;
  setPerPage: (number: number) => void;
};

const contextDefaultValues: ResultsSettingsProps = {
  perPage: 8,
  setPerPage: () => null,
};

export const ResultsSettingsContext = createContext<ResultsSettingsProps>(contextDefaultValues);

export const ResultsSettingsProvider = ({ children }: { children: ReactNode }) => {
  const [perPage, setPerPage] = useLocalStorage('perPage', 4);

  const memoizedValue = useMemo(
    () => ({
      perPage,
      setPerPage,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [perPage]
  );

  return (
    <ResultsSettingsContext.Provider value={memoizedValue}>
      {children}
    </ResultsSettingsContext.Provider>
  );
};
