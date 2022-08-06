import type { ReactNode } from 'react';
import { createContext } from 'react';

import { useLocalStorage } from '@/hooks/useLocalStorage';

import { COMPATIBLE_COLORS } from '@/constants/AccentColors';
import { COMPATIBLE_THEMES } from '@/constants/Themes';

import type { Color, ThemeColor } from '@/types/types';

type SettingsContextProps = {
  accentColor: Color;
  setAccentColor: (string: Color) => void;
  theme: ThemeColor;
  setTheme: (string: ThemeColor) => void;
};

const contextDefaultValues: SettingsContextProps = {
  accentColor: 'blue',
  setAccentColor: () => null,
  theme: 'system',
  setTheme: () => null,
};

export const SettingsContext = createContext<SettingsContextProps>(contextDefaultValues);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [accentColor, setAccentColor] = useLocalStorage<Color>('accentColor', 'blue');
  const [theme, setTheme] = useLocalStorage<ThemeColor>('theme', 'system');

  const isAccentColorCompatible = COMPATIBLE_COLORS.some(
    (compatibleColor) => compatibleColor === accentColor
  );

  const isThemeCompatible = COMPATIBLE_THEMES.some((compatibleTheme) => compatibleTheme === theme);

  const settingValues = {
    accentColor: isAccentColorCompatible ? accentColor : 'blue',
    setAccentColor,
    theme: isThemeCompatible ? theme : 'system',
    setTheme,
  };

  return <SettingsContext.Provider value={settingValues}>{children}</SettingsContext.Provider>;
};
