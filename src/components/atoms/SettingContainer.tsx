import type { ReactNode } from 'react';

type SettingFormContainerProps = {
  children: ReactNode;
};

export const SettingContainer = ({ children }: SettingFormContainerProps) => {
  return (
    <div className='mt-4 flex flex-col justify-start gap-y-4 text-white landscape:mt-1 landscape:mr-7'>
      {children}
    </div>
  );
};
