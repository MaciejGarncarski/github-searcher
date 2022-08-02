import { createContext, ReactNode } from 'react';

import { useLocalStorage } from '@/hooks/useLocalStorage';

import { Color } from '@/components/molecules/ColorSwitch';
import { ThemeColors } from '@/components/molecules/ThemeSwitch';

type SettingsContextProps = {
  accentColor: Color;
  setAccentColor: (string: Color) => void;
  theme: ThemeColors;
  setTheme: (string: ThemeColors) => void;
};

const contextDefaultValues: SettingsContextProps = {
  accentColor: 'blue',
  setAccentColor: () => null,
  theme: 'system',
  setTheme: () => null,
};

export const SettingsContext =
  createContext<SettingsContextProps>(contextDefaultValues);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [accentColor, setAccentColor] = useLocalStorage('mainColor', 'blue');
  const [theme, setTheme] = useLocalStorage('theme', 'system');

  const settingValues = {
    accentColor,
    setAccentColor,
    theme,
    setTheme,
  };

  return (
    <SettingsContext.Provider value={settingValues}>
      {children}
    </SettingsContext.Provider>
  );
};
