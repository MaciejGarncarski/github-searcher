import type { ReactNode } from 'react';

type SettingHeadingProps = {
  children: ReactNode;
};

export const SettingHeading = ({ children }: SettingHeadingProps) => {
  return <h3 className='mb-2 text-center text-2xl font-semibold text-slate-200 '>{children}</h3>;
};
