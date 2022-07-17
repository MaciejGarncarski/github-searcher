import { ReactNode } from 'react';

import { Header } from '@/components/organisms/Header';

type LayoutProps = {
  inputDisabled?: boolean;
  children: ReactNode;
};

export const Layout = ({ inputDisabled, children }: LayoutProps) => {
  return (
    <>
      <Header inputDisabled={inputDisabled ?? false} />
      {children}
    </>
  );
};
