import { ReactNode } from 'react';

type SettingFormContainerProps = {
  children: ReactNode;
  themeSwitch?: boolean;
};

export const SettingFormContainer = ({
  children,
  themeSwitch,
}: SettingFormContainerProps) => {
  return (
    <form
      className={`mt-4 flex flex-col justify-center text-white landscape:mt-1 landscape:mr-7 ${
        themeSwitch ? 'gap-y-[17px]' : 'gap-y-3'
      }`}
    >
      {children}
    </form>
  );
};
