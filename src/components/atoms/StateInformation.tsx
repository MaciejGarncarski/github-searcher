import { ReactNode } from 'react';

type StateInformationProps = {
  children: ReactNode;
};

export const StateInformation = ({ children }: StateInformationProps) => {
  return (
    <div className='min-h-screen grid place-content-center text-2xl'>
      {children}
    </div>
  );
};
