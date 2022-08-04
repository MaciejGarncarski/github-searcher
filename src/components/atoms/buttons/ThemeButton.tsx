import type { IconType } from 'react-icons';

import { clsxm } from '@/lib/clsxm';

import type { ThemeColor } from '@/types/types';

type ThemeButtonProps = {
  themeColor: ThemeColor;
  Icon: IconType;
  activeThemeColor: ThemeColor;
  onChange: () => void;
};

export const ThemeButton = ({ themeColor, Icon, activeThemeColor, onChange }: ThemeButtonProps) => {
  return (
    <label className='w-full cursor-pointer justify-self-start shadow-lg  shadow-slate-500/40  lg:self-center'>
      <input
        className='peer absolute h-0 w-0 opacity-0'
        type='radio'
        checked={themeColor === activeThemeColor}
        onChange={onChange}
      />
      <div className='flex items-center justify-between gap-x-2 rounded border border-slate-300 px-3 py-1 opacity-80 peer-checked:border-transparent peer-checked:bg-slate-500 peer-checked:opacity-100 peer-focus:border-slate-100 peer-focus:bg-slate-500 peer-focus:opacity-100'>
        <span className='text-xl'>{themeColor} theme</span>
        <span
          className={clsxm(
            themeColor === activeThemeColor ? 'opacity-100' : 'opacity-40',
            'flex items-center rounded border-2 border-transparent text-2xl'
          )}
        >
          <Icon />
        </span>
      </div>
    </label>
  );
};
