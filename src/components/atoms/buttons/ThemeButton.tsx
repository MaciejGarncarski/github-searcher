import type { IconType } from 'react-icons';

import { clsxm } from '@/lib/clsxm';
import { useSSRAccentColor } from '@/hooks/useSSRAccentColor';
import { ACTIVE_BUTTON_COLORS, BORDER_COLORS } from '@/utils/colorsData';

import type { ThemeColor } from '@/types/types';

type ThemeButtonProps = {
  themeColor: ThemeColor;
  Icon: IconType;
  activeThemeColor: ThemeColor;
  setTheme: (theme: ThemeColor) => void;
};

export const ThemeButton = ({ themeColor, Icon, activeThemeColor, setTheme }: ThemeButtonProps) => {
  const { accentColor } = useSSRAccentColor();

  const isActive = activeThemeColor === themeColor;

  const handleClick = () => setTheme(themeColor);

  return (
    <button
      type='button'
      className={clsxm(
        BORDER_COLORS[accentColor],
        isActive && ACTIVE_BUTTON_COLORS[accentColor],
        isActive && 'text-slate-700',
        'flex items-center justify-between gap-x-3 rounded border px-3 py-1 outline-slate-200 transition md:gap-x-6'
      )}
      onClick={handleClick}
    >
      <span className='flex items-center rounded text-2xl'>
        <Icon />
      </span>
      <span className='text-xl'>{themeColor}</span>
    </button>
  );
};
