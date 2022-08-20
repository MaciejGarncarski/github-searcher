import { QueryClient, QueryClientConfig, QueryClientProvider } from '@tanstack/react-query';
import { Hydrate } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { MotionConfig } from 'framer-motion';
import { AppProps } from 'next/app';
import NextProgress from 'next-progress';
import { ReactNode, useState } from 'react';

import '@/styles/globals.css';

import { Layout } from '@/components/Layout';

import { ActivePageProvider } from '@/contexts/activePageContext';
import { ResultsSettingsProvider } from '@/contexts/resultsSettingsContext';
import { SearchProvider } from '@/contexts/searchedValueContext';
import { SettingsProvider } from '@/contexts/settingsContext';

const Contexts = ({ children }: { children: ReactNode }) => {
  return (
    <ResultsSettingsProvider>
      <ActivePageProvider>
        <SearchProvider>
          <SettingsProvider>{children}</SettingsProvider>
        </SearchProvider>
      </ActivePageProvider>
    </ResultsSettingsProvider>
  );
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  const queryOptions: QueryClientConfig = {
    defaultOptions: {
      queries: {
        retry: 2,
        refetchOnWindowFocus: false,
      },
    },
  };

  const [queryClient] = useState(() => new QueryClient(queryOptions));

  return (
    <Contexts>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <NextProgress color='#2563eb' height={3} options={{ showSpinner: false }} />
          <MotionConfig reducedMotion='user'>
            <ReactQueryDevtools />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </MotionConfig>
        </Hydrate>
      </QueryClientProvider>
    </Contexts>
  );
};

export default MyApp;
