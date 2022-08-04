import { ColorButton } from '@/components/atoms/buttons/ColorButton';
import { SettingFormContainer } from '@/components/atoms/SettingFormContainer';
import { SettingHeading } from '@/components/atoms/SettingHeading';

import { COMPATIBLE_COLORS } from '@/constants/AccentColors';

export const ColorSwitch = () => {
  return (
    <SettingFormContainer>
      <SettingHeading>Accent color</SettingHeading>

      <div className='flex items-center justify-center gap-2 landscape:mx-auto landscape:max-w-[100px] landscape:flex-wrap landscape:gap-x-4 landscape:gap-y-5'>
        {COMPATIBLE_COLORS.map((color) => {
          return <ColorButton key={color} color={color} />;
        })}
      </div>
    </SettingFormContainer>
  );
};
