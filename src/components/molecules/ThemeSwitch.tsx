import { IconType } from 'react-icons';
import { BsLaptop, BsMoon, BsSun } from 'react-icons/bs';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useThemeChange } from '@/hooks/useThemeChange';

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
  const [value, setValue] = useLocalStorage('theme', 'light');

  const handleThemeChange = (themeColor: ThemeColors) => {
    setValue(themeColor);
  };

  useThemeChange(value);

  return (
    <form className='mt-4 flex flex-col gap-y-3 text-white'>
      <h3 className='mb-4 text-3xl'>Choose theme</h3>
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
    </form>
  );
};
