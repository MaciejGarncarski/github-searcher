import type { ReactNode } from 'react';

type SettingFormContainerProps = {
  children: ReactNode;
};

export const SettingFormContainer = ({ children }: SettingFormContainerProps) => {
  return (
    <form className='mt-4 flex flex-col justify-start gap-y-4 text-white landscape:mt-1 landscape:mr-7'>
      {children}
    </form>
  );
};
