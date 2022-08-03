import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        <link
          href='https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;900&display=swap'
          rel='stylesheet'
        />
        <link rel='preconnect' href='https://api.github.com/' />
        <link rel='dns-prefetch' href='https://api.github.com/' />
        <link rel='preconnect' href='https://avatars.github.com/' />
        <link rel='dns-prefetch' href='https://avatars.github.com/' />
        <link rel='preconnect' href='https://avatars.githubusercontent.com/' />
        <link rel='dns-prefetch' href='https://avatars.githubusercontent.com/' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
