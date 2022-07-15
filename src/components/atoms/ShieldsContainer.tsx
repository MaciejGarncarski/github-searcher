import { ReactNode } from 'react';

export const ShieldsContainer = ({ children }: { children?: ReactNode }) => {
  return (
    <ul className='col-start-2 flex flex-wrap items-center gap-x-2 gap-y-2'>
      {children}
    </ul>
  );
};
