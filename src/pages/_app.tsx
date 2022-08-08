import { QueryClient, QueryClientConfig, QueryClientProvider } from '@tanstack/react-query';
import { Hydrate } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { MotionConfig } from 'framer-motion';
import { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { useState } from 'react';

import '@/styles/globals.css';

import { ActivePageProvider } from '@/contexts/activePageContext';
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
    <ActivePageProvider>
      <SearchProvider>
        <SettingsProvider>
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <NextNProgress
                color='#2563eb'
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                showOnShallow={true}
                options={{ easing: 'ease', speed: 500 }}
              />
              <MotionConfig reducedMotion='user'>
                <ReactQueryDevtools />
                <Component {...pageProps} />
              </MotionConfig>
            </Hydrate>
          </QueryClientProvider>
        </SettingsProvider>
      </SearchProvider>
    </ActivePageProvider>
  );
};

export default MyApp;
