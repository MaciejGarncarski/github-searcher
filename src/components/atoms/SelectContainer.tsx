import { ReactNode } from 'react';

type SelectContainerProps = {
  children: ReactNode;
};

export const SelectContainer = ({ children }: SelectContainerProps) => {
  return <label className='flex items-center gap-2 text-2xl'>{children}</label>;
};
