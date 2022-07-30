import { useEffect } from 'react';
import { useCallback } from 'react';
import { IconType } from 'react-icons';
import { BsLaptop, BsMoon, BsSun } from 'react-icons/bs';

import { useLocalStorage } from '@/hooks/useLocalStorage';

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

  const changeTheme = (themeColor: string) => {
    const htmlTag = document.documentElement;
    htmlTag.className = themeColor;
    htmlTag.style.colorScheme = themeColor;
  };

  const handleThemeChange = (themeColor: 'dark' | 'light' | 'system') => {
    setValue(themeColor);
  };

  const handleChange = useCallback(
    (colorScheme: MediaQueryList | MediaQueryListEvent) => {
      if (colorScheme.matches) {
        changeTheme('dark');
      }
      if (!colorScheme.matches) {
        changeTheme('light');
      }
    },
    []
  );

  useEffect(() => {
    if (value === 'light') {
      changeTheme('light');
    }
    if (value === 'dark') {
      changeTheme('dark');
    }
    if (value === 'system') {
      const detectColorScheme = window.matchMedia(
        '(prefers-color-scheme: dark)'
      );
      handleChange(detectColorScheme);
    }
  }, [handleChange, value]);

  useEffect(() => {
    const detectColorScheme = window.matchMedia('(prefers-color-scheme: dark)');
    detectColorScheme.addEventListener('change', handleChange);
    return () => detectColorScheme.removeEventListener('change', handleChange);
  }, [handleChange]);

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
