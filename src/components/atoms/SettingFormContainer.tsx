import { ReactNode } from 'react';

type SettingFormContainerProps = {
  children: ReactNode;
};

export const SettingFormContainer = ({
  children,
}: SettingFormContainerProps) => {
  return (
    <form className='mt-4 flex flex-col gap-y-3 text-white'>{children}</form>
  );
};
