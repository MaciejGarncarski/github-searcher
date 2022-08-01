import { IconType } from 'react-icons';
import { BsLaptop, BsMoon, BsSun } from 'react-icons/bs';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useThemeChange } from '@/hooks/useThemeChange';

import { SettingFormContainer } from '@/components/atoms/SettingFormContainer';
import { SettingHeading } from '@/components/atoms/SettingHeading';
import { ThemeButton } from '@/components/atoms/ThemeButton';

export type ThemeColors = 'dark' | 'light' | 'system';

type ThemeInfo = {
  themeColor: ThemeColors;
  Icon: IconType;
};

const themes: ThemeInfo[] = [
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
];

export const ThemeSwitch = () => {
  const [value, setValue] = useLocalStorage('theme', 'system');

  const handleThemeChange = (themeColor: ThemeColors) => {
    setValue(themeColor);
  };

  useThemeChange(value);

  return (
    <SettingFormContainer themeSwitch>
      <SettingHeading>Theme</SettingHeading>
      {themes.map(({ themeColor, Icon }) => {
        return (
          <ThemeButton
            key={themeColor}
            themeColor={themeColor}
            Icon={Icon}
            activeThemeColor={value}
            onChange={() => handleThemeChange(themeColor)}
          />
        );
      })}
    </SettingFormContainer>
  );
};
