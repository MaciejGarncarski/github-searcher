import type { ReactNode } from 'react';

import { clsxm } from '@/lib/clsxm';
import { useSettings } from '@/hooks/useContexts';
import { SHIELD_COLORS } from '@/utils/colorsData';

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
        SHIELD_COLORS[accentColor],
        'max-w-210px flex items-center break-words rounded-md py-1 px-4  text-center text-xl text-white dark:text-white'
      )}
    >
      {children}
    </li>
  );
};
