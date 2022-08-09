import type { ReactNode } from 'react';

export const ShieldsContainer = ({ children }: { children?: ReactNode }) => {
  return (
    <ul className='col-start-2 flex max-w-3xl flex-wrap items-center gap-x-2 gap-y-3 lg:gap-x-4'>
      {children}
    </ul>
  );
};
