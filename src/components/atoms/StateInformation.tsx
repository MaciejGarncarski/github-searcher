import { ReactNode } from 'react';

type StateInformationProps = {
  children: ReactNode;
};

export const StateInformation = ({ children }: StateInformationProps) => {
  return (
    <div className='h-60 grid place-content-center text-2xl'>{children}</div>
  );
};
