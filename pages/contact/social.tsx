import React from 'react';
import Layout from '@components/Layout/Layout';
import Head from 'next/head';

const title = 'Ced | Social';
export default function Social() {
   return (
      <>
         <Head>
            <title>{title}</title>
         </Head>
         <Layout name="contact">
            <div></div>
         </Layout>
      </>
   );
}
