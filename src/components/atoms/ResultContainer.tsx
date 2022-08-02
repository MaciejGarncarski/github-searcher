import { ReactNode } from 'react';

import { clsxm } from '@/lib/clsxm';

type ResultContainerProps = {
  children: ReactNode;
  className?: string;
};

export const ResultContainer = ({
  children,
  className = '',
}: ResultContainerProps) => {
  return (
    <article
      className={clsxm(
        className,
        'grid min-h-user w-full grid-cols-user gap-x-3 gap-y-4 border-t-2 border-slate-400 px-3 py-8 dark:text-white lg:px-4'
      )}
    >
      {children}
    </article>
  );
};
