import { ReactNode } from 'react';

type StateInformationProps = {
  children: ReactNode;
};

export const StateInformation = ({ children }: StateInformationProps) => {
  return (
    <div className='min-h-state-messsage grid place-content-center text-2xl px-10 text-center'>
      {children}
    </div>
  );
};
