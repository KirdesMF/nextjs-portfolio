import Head from 'next/head';
import React from 'react';
import Layout from '@components/Layout/Layout';

const title = 'Ced | Skills';

export default function Skills() {
   return (
      <>
         <Head>
            <title>{title}</title>
         </Head>

         <Layout name="skills">
            <div></div>
         </Layout>
      </>
   );
}
