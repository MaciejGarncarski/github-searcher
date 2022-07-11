import { ReactNode } from 'react';

import { Header } from '@/components/organisms/Header';

type LayoutProps = {
  setSearchedValue?: (value: string) => void;
  inputDisabled?: boolean;
  children: ReactNode;
};

export const Layout = ({
  setSearchedValue,
  inputDisabled,
  children,
}: LayoutProps) => {
  return (
    <>
      <Header
        setSearchedValue={setSearchedValue}
        inputDisabled={inputDisabled ?? false}
      />
      {children}
    </>
  );
};
