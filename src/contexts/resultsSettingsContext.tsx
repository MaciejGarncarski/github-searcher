import { ReactNode } from 'react';
import { createContext } from 'react';

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

  const settingValues = {
    perPage,
    setPerPage,
  };

  return (
    <ResultsSettingsContext.Provider value={settingValues}>
      {children}
    </ResultsSettingsContext.Provider>
  );
};
