import { backgroundColors } from '@/utils/colorsConfig';

import { Color } from '@/components/molecules/ColorSwitch';

type ColorButtonProps = {
  color: Color;
  activeColor: Color;
  onChange: () => void;
};

export const ColorButton = ({
  color,
  activeColor,
  onChange,
}: ColorButtonProps) => {
  return (
    <label className='flex w-full cursor-pointer items-center justify-center justify-self-start drop-shadow-lg lg:self-center'>
      <input
        className='peer absolute h-0 w-0 opacity-0'
        type='radio'
        checked={color === activeColor}
        onChange={onChange}
      />
      <span
        className={`inline-block h-8 w-8 rounded-full border-2 border-transparent text-xl opacity-80 shadow-lg transition-all peer-checked:scale-110 peer-checked:border-slate-200 peer-checked:opacity-100  peer-focus:outline peer-focus:outline-offset-2 ${backgroundColors[color]}`}
      ></span>
    </label>
  );
};
