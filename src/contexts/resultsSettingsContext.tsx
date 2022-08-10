import { ReactNode } from 'react';
import { createContext } from 'react';
import { useMemo } from 'react';

import { useLocalStorage } from '@/hooks/useLocalStorage';

import { PER_PAGE, PerPageNumbers } from '@/constants/ResultsPerPage';

type ResultsSettingsProps = {
  perPage: PerPageNumbers;
  setPerPage: (number: PerPageNumbers) => void;
};

const contextDefaultValues: ResultsSettingsProps = {
  perPage: 8,
  setPerPage: () => null,
};

export const ResultsSettingsContext = createContext<ResultsSettingsProps>(contextDefaultValues);

type MemoValues = {
  perPage: PerPageNumbers;
  setPerPage: (value: PerPageNumbers | ((val: PerPageNumbers) => PerPageNumbers)) => void;
};

export const ResultsSettingsProvider = ({ children }: { children: ReactNode }) => {
  const [perPage, setPerPage] = useLocalStorage<PerPageNumbers>('perPage', 6);
  const isPageCompatible = PER_PAGE.includes(perPage);

  const memoizedValue: MemoValues = useMemo(
    () => ({
      perPage: isPageCompatible ? perPage : 6,
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
