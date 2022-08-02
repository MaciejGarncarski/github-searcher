import { ReactNode } from 'react';

import { clsxm } from '@/lib/clsxm';
import { useSettings } from '@/hooks/useContexts';
import { shieldColors } from '@/utils/colorsConfig';

type ShieldProps = {
  children: ReactNode;
  className?: string;
};

export const Shield = ({ children, className }: ShieldProps) => {
  const { accentColor } = useSettings();
  return (
    <li
      className={clsxm(
        className,
        shieldColors[accentColor],
        'max-w-210px flex items-center break-words rounded-md py-1 px-4  text-center text-xl text-white shadow-md  dark:text-white'
      )}
    >
      {children}
    </li>
  );
};
