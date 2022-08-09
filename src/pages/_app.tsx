import { QueryClient, QueryClientConfig, QueryClientProvider } from '@tanstack/react-query';
import { Hydrate } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { MotionConfig } from 'framer-motion';
import { AppProps } from 'next/app';
import NextProgress from 'next-progress';
import { useState } from 'react';

import '@/styles/globals.css';

import { ActivePageProvider } from '@/contexts/activePageContext';
import { ResultsSettingsProvider } from '@/contexts/resultsSettingsContext';
import { SearchProvider } from '@/contexts/searchedValueContext';
import { SettingsProvider } from '@/contexts/settingsContext';

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
    <ResultsSettingsProvider>
      <ActivePageProvider>
        <SearchProvider>
          <SettingsProvider>
            <QueryClientProvider client={queryClient}>
              <Hydrate state={pageProps.dehydratedState}>
                <NextProgress color='#2563eb' height={3} options={{ showSpinner: false }} />
                <MotionConfig reducedMotion='user'>
                  <ReactQueryDevtools />
                  <Component {...pageProps} />
                </MotionConfig>
              </Hydrate>
            </QueryClientProvider>
          </SettingsProvider>
        </SearchProvider>
      </ActivePageProvider>
    </ResultsSettingsProvider>
  );
};

export default MyApp;
