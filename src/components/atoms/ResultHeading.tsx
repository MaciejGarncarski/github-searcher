import { ReactNode } from 'react';

import { Heading } from '@/components/atoms/Heading';

export const ResultHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading type='h2' className='text-blue-600 text-2xl'>
      {children}
    </Heading>
  );
};
