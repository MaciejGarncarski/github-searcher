import { useSettings } from '@/hooks/useContexts';
import { backgroundColors } from '@/utils/colorsData';

import { Color } from '@/components/molecules/ColorSwitch';

type ColorButtonProps = {
  color: Color;
};

export const ColorButton = ({ color }: ColorButtonProps) => {
  const { accentColor, setAccentColor } = useSettings();

  return (
    <label className='flex w-full cursor-pointer items-center justify-center justify-self-start  lg:self-center'>
      <input
        className='peer absolute h-0 w-0 opacity-0'
        type='radio'
        checked={color === accentColor}
        onChange={() => setAccentColor(color)}
      />
      <span
        className={`inline-block h-8 w-8 rounded-full border-2 border-transparent text-xl opacity-80 shadow-slate-600/40  drop-shadow-lg transition-all peer-checked:scale-110 peer-checked:border-slate-200 peer-checked:opacity-100  peer-focus:outline peer-focus:outline-offset-2 ${backgroundColors[color]}`}
      ></span>
    </label>
  );
};
