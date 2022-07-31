import { createContext, ReactNode, useState } from 'react';

import { useLocalStorage } from '@/hooks/useLocalStorage';

import { ColorType } from '@/components/molecules/ColorSwitch';

type ActivePageContextProps = {
  mainColor: ColorType;
  setMainColor: (string: ColorType) => void;
};

const contextDefaultValues: ActivePageContextProps = {
  mainColor: 'blue',
  setMainColor: () => null,
};

export const MainColorContext =
  createContext<ActivePageContextProps>(contextDefaultValues);

export const MainColorProvider = ({ children }: { children: ReactNode }) => {
  const [value] = useLocalStorage('mainColor', 'blue');

  const [mainColor, setMainColor] = useState<ColorType>(value);

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
