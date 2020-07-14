import React from 'react';
import Head from 'next/head';
import { Layout } from '@components/Layout/Layout';

const Welcome = () => {
   return (
      <Layout name="Home">
         <Head>
            <title>Ced | Welcome ...</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
      </Layout>
   );
};

/**=============== Export ============ */
export default Welcome;
