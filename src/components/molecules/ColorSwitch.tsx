import { useEffect } from 'react';

import { useMainColor } from '@/hooks/useContexts';
import { useLocalStorage } from '@/hooks/useLocalStorage';

import { ColorButton } from '@/components/atoms/ColorButton';

export type Color = 'blue' | 'red' | 'green' | 'yellow';

const colors: Color[] = ['blue', 'red', 'green', 'yellow'];

export const ColorSwitch = () => {
  const [value, setValue] = useLocalStorage('mainColor', 'blue');
  const { setMainColor } = useMainColor();

  const handleColorChange = (themeColor: Color) => {
    setValue(themeColor);
  };

  useEffect(() => {
    setMainColor(value);
  }, [setMainColor, value]);

  return (
    <form className='mt-4 flex flex-col gap-y-3 text-white'>
      <h3 className='mb-4 text-3xl'>Choose color</h3>
      <div className='flex items-center justify-center gap-2'>
        {colors.map((color) => {
          return (
            <ColorButton
              key={color}
              color={color}
              activeColor={value}
              onChange={() => handleColorChange(color)}
            />
          );
        })}
      </div>
    </form>
  );
};
