import { IconType } from 'react-icons';
import { BsLaptop, BsMoon, BsSun } from 'react-icons/bs';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useThemeChange } from '@/hooks/useThemeChange';

import { ThemeButton } from '@/components/atoms/ThemeButton';

type ThemeInfo = {
  themeColor: 'dark' | 'light' | 'system';
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

  const handleThemeChange = (themeColor: 'dark' | 'light' | 'system') => {
    setValue(themeColor);
  };

  useThemeChange(value);

  return (
    <fieldset className='mt-4 flex flex-col gap-y-3 text-white'>
      <legend className='mb-4 text-3xl'>Choose theme</legend>
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
    </fieldset>
  );
};
