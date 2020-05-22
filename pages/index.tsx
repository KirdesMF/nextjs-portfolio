import React from 'react';
import Head from 'next/head';
import { Layout } from '@components/Layout/Layout';

export default function Home() {
   return (
      <Layout name="Works">
         <Head>
            <title>Ced | Home</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
      </Layout>
   );
}
