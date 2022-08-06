import type { IconType } from 'react-icons';

import { clsxm } from '@/lib/clsxm';
import { useSSRAccentColor } from '@/hooks/useSSRAccentColor';
import { ACTIVE_BUTTON_COLORS, BORDER_COLORS } from '@/utils/colorsData';

import type { ThemeColor } from '@/types/types';

type ThemeButtonProps = {
  themeColor: ThemeColor;
  Icon: IconType;
  activeThemeColor: ThemeColor;
  onChange: () => void;
};

export const ThemeButton = ({ themeColor, Icon, activeThemeColor, onChange }: ThemeButtonProps) => {
  const { accentColor } = useSSRAccentColor();

  return (
    <label className='w-full cursor-pointer justify-self-start lg:self-center'>
      <input
        className='peer absolute h-0 w-0 opacity-0'
        type='radio'
        checked={themeColor === activeThemeColor}
        onChange={onChange}
      />
      <div
        className={clsxm(
          BORDER_COLORS[accentColor],
          ACTIVE_BUTTON_COLORS[accentColor],
          'flex items-center justify-between gap-x-2 rounded border px-3 py-1 opacity-80 peer-checked:border-slate-300 peer-checked:opacity-100  peer-focus:bg-slate-600 peer-focus:opacity-100 peer-focus:outline peer-focus:outline-2 peer-focus:outline-offset-4'
        )}
      >
        <span className='text-xl'>{themeColor} theme</span>
        <span className='flex items-center rounded border-2 border-transparent text-2xl'>
          <Icon />
        </span>
      </div>
    </label>
  );
};
