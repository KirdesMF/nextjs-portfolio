import React from 'react';
import Head from 'next/head';
import { Layout } from '@components/Layout/Layout';

/**
 * Home Pages Component
 */
const Home = () => {
   return (
      <Layout name="Home">
         <Head>
            <title>Ced | Home</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
      </Layout>
   );
};

/**=============== Export ============ */
export default Home;
