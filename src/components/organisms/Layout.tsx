import { ReactNode } from 'react';

import { Header } from '@/components/molecules/Header';

type LayoutProps = {
  setSearchedValue: (value: string) => void;
  children: ReactNode;
};

export const Layout = ({ setSearchedValue, children }: LayoutProps) => {
  return (
    <>
      <Header setSearchedValue={setSearchedValue} />
      <main>{children}</main>
    </>
  );
};
