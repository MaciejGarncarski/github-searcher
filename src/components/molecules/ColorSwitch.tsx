import { ColorButton } from '@/components/atoms/ColorButton';
import { SettingFormContainer } from '@/components/atoms/SettingFormContainer';
import { SettingHeading } from '@/components/atoms/SettingHeading';

export type Color = 'blue' | 'red' | 'green' | 'yellow';

const colors: Color[] = ['blue', 'red', 'green', 'yellow'];

export const ColorSwitch = () => {
  return (
    <SettingFormContainer>
      <SettingHeading>Accent color</SettingHeading>

      <div className='flex items-center justify-center gap-2 landscape:flex-col'>
        {colors.map((color) => {
          return <ColorButton key={color} color={color} />;
        })}
      </div>
    </SettingFormContainer>
  );
};
