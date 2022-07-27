import { useEffect } from 'react';
import { useState } from 'react';
import { BsLaptop, BsMoon, BsSun } from 'react-icons/bs';

export const ThemeIcon = ({ theme }: { theme: string }) => {
  const [themeColor, setThemeColor] = useState('light');

  useEffect(() => {
    setThemeColor(theme);
  }, [theme]);

  return (
    <span
      className='flex items-center
   rounded border-2 border-transparent px-2 py-1 text-3xl text-white peer-focus:border-white'
      title={`${themeColor} theme`}
    >
      {themeColor === 'light' && <BsSun />}
      {themeColor === 'dark' && <BsMoon />}
      {themeColor === 'system' && <BsLaptop />}
    </span>
  );
};
