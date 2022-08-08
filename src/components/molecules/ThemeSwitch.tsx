import { BsLaptop, BsMoon, BsSun } from 'react-icons/bs';

import { useSettings } from '@/hooks/useContexts';

import { ThemeButton } from '@/components/atoms/buttons/ThemeButton';
import { SettingContainer } from '@/components/atoms/SettingContainer';
import { SettingHeading } from '@/components/atoms/SettingHeading';

const themes = [
  {
    themeColor: 'light',
    Icon: BsSun,
  },
  {
    themeColor: 'dark',
    Icon: BsMoon,
  },
  {
    themeColor: 'system',
    Icon: BsLaptop,
  },
] as const;

export const ThemeSwitch = () => {
  const { theme, setTheme } = useSettings();

  return (
    <SettingContainer>
      <SettingHeading>Theme</SettingHeading>
      {themes.map(({ themeColor, Icon }) => {
        return (
          <ThemeButton
            key={themeColor}
            themeColor={themeColor}
            Icon={Icon}
            activeThemeColor={theme}
            setTheme={setTheme}
          />
        );
      })}
    </SettingContainer>
  );
};
