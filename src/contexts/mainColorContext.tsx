import { createContext, ReactNode, useState } from 'react';

import { useLocalStorage } from '@/hooks/useLocalStorage';

import { Color } from '@/components/molecules/ColorSwitch';

type ActivePageContextProps = {
  mainColor: Color;
  setMainColor: (string: Color) => void;
};

const contextDefaultValues: ActivePageContextProps = {
  mainColor: 'blue',
  setMainColor: () => null,
};

export const MainColorContext =
  createContext<ActivePageContextProps>(contextDefaultValues);

export const MainColorProvider = ({ children }: { children: ReactNode }) => {
  const [value] = useLocalStorage('mainColor', 'blue');

  const [mainColor, setMainColor] = useState<Color>(value);

  const colorValue = {
    mainColor,
    setMainColor,
  };

  return (
    <MainColorContext.Provider value={colorValue}>
      {children}
    </MainColorContext.Provider>
  );
};
