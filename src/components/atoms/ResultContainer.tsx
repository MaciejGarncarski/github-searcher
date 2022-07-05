import { ReactNode } from 'react';

export const ResultContainer = ({ children }: { children: ReactNode }) => {
  return (
    <article className='grid w-full min-h-user px-2 lg:px-4 py-4 grid-cols-user gap-x-3 gap-y-4 border-t-2 border-gray-300'>
      {children}
    </article>
  );
};
