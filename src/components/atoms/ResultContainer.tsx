import { ReactNode } from 'react';

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
      className={`grid min-h-user w-full grid-cols-user gap-x-3 gap-y-4 border-t-2 border-slate-600 px-2 py-4 dark:text-white lg:px-4 ${className}`}
    >
      {children}
    </article>
  );
};
