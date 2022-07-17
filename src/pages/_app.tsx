import { MotionConfig } from 'framer-motion';
import { AppProps } from 'next/app';
import NextProgress from 'next-progress';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import '@/styles/globals.css';

import { ActivePageProvider } from '@/contexts/activePage-context';
import { SearchProvider } from '@/contexts/searchValue-context';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ActivePageProvider>
      <SearchProvider>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <NextProgress
              height='4px'
              delay={300}
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
