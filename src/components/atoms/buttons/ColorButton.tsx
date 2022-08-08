import { clsxm } from '@/lib/clsxm';
import { useSettings } from '@/hooks/useContexts';
import { BG_COLORS } from '@/utils/colorsData';

import type { Color } from '@/types/types';

type ColorButtonProps = {
  color: Color;
};

export const ColorButton = ({ color }: ColorButtonProps) => {
  const { accentColor, setAccentColor } = useSettings();

  return (
    <label className='flex w-full cursor-pointer items-center justify-center justify-self-start lg:self-center landscape:w-auto'>
      <input
        className='peer absolute h-0 w-0 opacity-0'
        type='radio'
        checked={color === accentColor}
        onChange={() => setAccentColor(color)}
      />
      <span
        className={clsxm(
          BG_COLORS[color],
          'inline-block h-8 w-8 rounded-full text-xl opacity-80 transition peer-checked:scale-110 peer-checked:outline peer-focus:outline peer-focus:outline-offset-4'
        )}
      ></span>
    </label>
  );
};
