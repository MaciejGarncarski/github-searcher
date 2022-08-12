import { BsCheckLg } from 'react-icons/bs';

import { clsxm } from '@/lib/clsxm';
import { useSettings } from '@/hooks/useContexts';
import { BG_COLORS } from '@/utils/colorsData';

import type { Color } from '@/types/types';

type ColorButtonProps = {
  color: Color;
};

export const ColorButton = ({ color }: ColorButtonProps) => {
  const { accentColor, setAccentColor } = useSettings();

  const shouldCheckBeDark = color === 'white';

  return (
    <label className='flex w-full cursor-pointer items-center justify-center justify-self-start lg:self-center landscape:w-auto'>
      <input
        className='peer absolute h-0 w-0 opacity-0'
        type='radio'
        checked={color === accentColor}
        name={`color ${color}`}
        onChange={() => setAccentColor(color)}
      />
      <span
        className={clsxm(
          BG_COLORS[color],
          'flex h-9 w-9 items-center justify-center rounded-full text-xl transition peer-focus:outline peer-focus:outline-offset-4'
        )}
      >
        {color === accentColor && (
          <BsCheckLg
            className={clsxm(shouldCheckBeDark ? 'text-slate-700' : 'text-slate-100', 'text-xl')}
          />
        )}
      </span>
    </label>
  );
};
