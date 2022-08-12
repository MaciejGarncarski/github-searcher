import { ReactNode } from 'react';

import { useSettings } from '@/hooks/useContexts';
import { useThemeChange } from '@/hooks/useThemeChange';

import { Footer } from '@/components/molecules/Footer';
import { OfflinePopup } from '@/components/molecules/OfflinePopup';
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
      <Footer />
      <OfflinePopup />
    </>
  );
};
