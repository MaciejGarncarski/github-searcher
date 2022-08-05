import type { ReactNode } from 'react';

import { useSettings } from '@/hooks/useContexts';
import { useThemeChange } from '@/hooks/useThemeChange';

import { Header } from '@/components/organisms/Header';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const { theme } = useSettings();
  useThemeChange(theme);
  return (
    <>
      <Header />
      {children}
    </>
  );
};
