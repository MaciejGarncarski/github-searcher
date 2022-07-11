import { MotionConfig } from 'framer-motion';
import { AppProps } from 'next/app';
import NextProgress from 'next-progress';
import { useRef } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query';

import '@/styles/globals.css';

import { ActivePageProvider } from '@/contexts/activePage-context';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const queryClient = useRef(new QueryClient());
  return (
    <ActivePageProvider>
      <QueryClientProvider client={queryClient.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <NextProgress
            height='4px'
            delay={300}
            color='#2563eb'
            options={{ showSpinner: false }}
          />
          <MotionConfig reducedMotion='user'>
            <Component {...pageProps} />
          </MotionConfig>
        </Hydrate>
      </QueryClientProvider>
    </ActivePageProvider>
  );
};

export default MyApp;
