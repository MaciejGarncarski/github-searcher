import { ReactNode } from 'react';

export const ResultContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className='grid w-full min-h-user px-2 lg:px-4 py-4 grid-cols-user gap-x-3 gap-y-2 border-t-2 border-slate-300'>
      {children}
    </div>
  );
};
