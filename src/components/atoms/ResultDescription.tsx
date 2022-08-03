import { ReactNode } from 'react';

import { clsxm } from '@/lib/clsxm';

type ResultDescriptionProps = {
  children: ReactNode;
  className?: string;
};

export const ResultDescription = ({ children, className = '' }: ResultDescriptionProps) => {
  return (
    <p
      className={clsxm(
        'col-start-2  max-w-prose self-center overflow-hidden text-xl leading-relaxed',
        className
      )}
    >
      {children}
    </p>
  );
};
