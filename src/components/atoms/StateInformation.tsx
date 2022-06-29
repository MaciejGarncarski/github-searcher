import { ReactNode } from 'react';

import { Skeleton } from '@/components/atoms/Skeleton';

type StateInformationProps = {
  children: ReactNode;
};

export const StateInformation = ({ children }: StateInformationProps) => {
  return (
    <Skeleton className='min-h-screen grid place-content-center text-2xl'>
      {children}
    </Skeleton>
  );
};
