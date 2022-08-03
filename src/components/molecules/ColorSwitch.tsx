import { ColorButton } from '@/components/atoms/ColorButton';
import { SettingFormContainer } from '@/components/atoms/SettingFormContainer';
import { SettingHeading } from '@/components/atoms/SettingHeading';

export type Color = 'blue' | 'red' | 'green' | 'yellow' | 'white';

const colors: Color[] = ['blue', 'red', 'green', 'yellow', 'white'];

export const ColorSwitch = () => {
  return (
    <SettingFormContainer>
      <SettingHeading>Accent color</SettingHeading>

      <div className='flex items-center justify-center gap-2 landscape:max-h-40 landscape:flex-col landscape:flex-wrap landscape:gap-x-4 landscape:gap-y-5'>
        {colors.map((color) => {
          return <ColorButton key={color} color={color} />;
        })}
      </div>
    </SettingFormContainer>
  );
};
