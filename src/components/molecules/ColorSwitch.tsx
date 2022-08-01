import { useEffect } from 'react';

import { useMainColor } from '@/hooks/useContexts';
import { useLocalStorage } from '@/hooks/useLocalStorage';

import { ColorButton } from '@/components/atoms/ColorButton';
import { SettingFormContainer } from '@/components/atoms/SettingFormContainer';
import { SettingHeading } from '@/components/atoms/SettingHeading';

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
    <SettingFormContainer>
      <SettingHeading>Color</SettingHeading>

      <div className='flex items-center justify-center gap-2 landscape:flex-col'>
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
    </SettingFormContainer>
  );
};
