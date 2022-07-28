import { useCallback, useEffect } from 'react';

import { useLocalStorage } from '@/hooks/useLocalStorage';

import { ThemeIcon } from '@/components/atoms/ThemeIcon';

export const ThemeSwitch = () => {
  const [value, setValue] = useLocalStorage('theme', 'light');

  const checked = value === 'dark';

  const handleClick = () => {
    if (value === 'light') {
      setValue('dark');
    }
    if (value === 'dark') {
      setValue('system');
    }
    if (value === 'system') {
      setValue('light');
    }
  };

  const changeTheme = (themeColor: string) => {
    const htmlTag = document.documentElement;
    htmlTag.className = themeColor;
    htmlTag.style.colorScheme = themeColor;
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
    const detectColorScheme = window.matchMedia('(prefers-color-scheme: dark)');
    detectColorScheme.addEventListener('change', handleChange);

    return () => detectColorScheme.removeEventListener('change', handleChange);
  }, [handleChange]);

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

  return (
    <label className=' ml-auto cursor-pointer justify-self-start drop-shadow-lg lg:ml-10 lg:self-center'>
      <input
        className='peer absolute h-0 w-0 opacity-0'
        type='checkbox'
        checked={checked}
        onChange={handleClick}
      />
      <ThemeIcon theme={value} />
    </label>
  );
};
