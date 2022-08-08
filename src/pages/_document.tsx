import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang='en'>
      <Head>
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
};

export default Document;
