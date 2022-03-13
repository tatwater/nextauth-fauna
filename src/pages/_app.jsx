import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';


export default function NextAuthFauna({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider
      // refetchInterval={ 5 * 60 }
      session={ session }
    >
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />

        <title>NextAuth Fauna</title>
      </Head>
      <Component { ...pageProps } />
    </SessionProvider>
  );
}