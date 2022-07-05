import { AppProps } from 'next/app';
import { useRef } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import '@/styles/globals.css';

import { ActivePageProvider } from '@/contexts/activePage-context';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const queryClient = useRef(new QueryClient());
  return (
    <ActivePageProvider>
      <QueryClientProvider client={queryClient.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <ReactQueryDevtools />
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </ActivePageProvider>
  );
};

export default MyApp;
