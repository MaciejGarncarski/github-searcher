import { ReactNode } from 'react';

import { Header } from '@/components/organisms/Header';

type LayoutProps = {
  inputValue: string;
  setInputValue: (inputValue: string) => void;
  children: ReactNode;
};

export const Layout = ({
  inputValue,
  setInputValue,
  children,
}: LayoutProps) => {
  return (
    <>
      <Header inputValue={inputValue} setInputValue={setInputValue} />
      <main>{children}</main>
    </>
  );
};
