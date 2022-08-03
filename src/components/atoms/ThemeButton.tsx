import { IconType } from 'react-icons';

import type { ThemeColors } from '@/components/molecules/ThemeSwitch';

type ThemeButtonProps = {
  themeColor: ThemeColors;
  Icon: IconType;
  activeThemeColor: ThemeColors;
  onChange: () => void;
};

export const ThemeButton = ({
  themeColor,
  Icon,
  activeThemeColor,
  onChange,
}: ThemeButtonProps) => {
  return (
    <label className='w-full cursor-pointer justify-self-start shadow-slate-600/40  drop-shadow-lg  lg:self-center'>
      <input
        className='peer absolute h-0 w-0 opacity-0'
        type='radio'
        checked={themeColor === activeThemeColor}
        onChange={onChange}
      />
      <div
        className='opacity-85 flex items-center justify-between gap-x-2 rounded border border-slate-500 px-4 py-1 transition-colors hover:bg-slate-500 hover:opacity-100 peer-checked:bg-slate-500
      peer-checked:opacity-100 peer-focus:border-white'
      >
        <span className='text-xl'>{themeColor} theme</span>
        <span
          className='flex items-center
        rounded border-2 border-transparent text-2xl'
        >
          <Icon />
        </span>
      </div>
    </label>
  );
};
