import { useCallback, useEffect } from 'react';

export const useThemeChange = (value: string) => {
  const changeTheme = (themeColor: string) => {
    const htmlTag = document.documentElement;
    htmlTag.className = themeColor;
    htmlTag.style.colorScheme = themeColor;
  };

  const handleChange = useCallback((colorScheme: MediaQueryList | MediaQueryListEvent) => {
    if (colorScheme.matches) {
      changeTheme('dark');
    }
    if (!colorScheme.matches) {
      changeTheme('light');
    }
  }, []);

  useEffect(() => {
    if (value === 'light') {
      changeTheme('light');
    }
    if (value === 'dark') {
      changeTheme('dark');
    }
    if (value === 'system') {
      const detectColorScheme = window.matchMedia('(prefers-color-scheme: dark)');
      handleChange(detectColorScheme);
    }
  }, [handleChange, value]);

  useEffect(() => {
    const detectColorScheme = window.matchMedia('(prefers-color-scheme: dark)');
    detectColorScheme.addEventListener('change', handleChange);
    return () => detectColorScheme.removeEventListener('change', handleChange);
  }, [handleChange]);
};
