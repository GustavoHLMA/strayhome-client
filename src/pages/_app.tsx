import type { AppProps } from 'next/app';
import GlobalStyles from '../styles/globalStyles';
import Head from 'next/head';
import { AuthProvider } from '@/contexts/authContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Strayhome</title>
      </Head>
      <AuthProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}
