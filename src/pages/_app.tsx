import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
} from '@tanstack/react-query';
import { Hydrate } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { MotionConfig } from 'framer-motion';
import { AppProps } from 'next/app';
import NextProgress from 'next-progress';
import { useState } from 'react';

import '@/styles/globals.css';

import { ActivePageProvider } from '@/contexts/activePage-context';
import { SearchProvider } from '@/contexts/searchValue-context';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const queryOptions: QueryClientConfig = {
    defaultOptions: {
      queries: {
        keepPreviousData: true,
        refetchOnWindowFocus: false,
        suspense: true,
      },
    },
  };

  const [queryClient] = useState(() => new QueryClient(queryOptions));

  return (
    <ActivePageProvider>
      <SearchProvider>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <NextProgress
              height='2px'
              delay={200}
              color='#2563eb'
              options={{ showSpinner: false }}
            />
            <MotionConfig reducedMotion='user'>
              <ReactQueryDevtools />
              <Component {...pageProps} />
            </MotionConfig>
          </Hydrate>
        </QueryClientProvider>
      </SearchProvider>
    </ActivePageProvider>
  );
};

export default MyApp;
