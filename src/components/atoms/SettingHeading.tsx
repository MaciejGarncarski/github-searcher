import { ReactNode } from 'react';

type SettingHeadingProps = {
  children: ReactNode;
};

export const SettingHeading = ({ children }: SettingHeadingProps) => {
  return (
    <h3 className='mb-2 text-center text-xl font-normal text-slate-300 '>
      {children}
    </h3>
  );
};
