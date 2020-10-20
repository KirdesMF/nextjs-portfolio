import React from 'react';
import Head from 'next/head';
import Layout from '@components/Layout/Layout';

import MaintTitle from '@components/MainTitle/MainTitle';
import NavHome from '@components/NavHome/NavHome';

const title = 'Ced | Home';

export default function Home() {
   return (
      <>
         <Head>
            <title>{title}</title>
         </Head>

         <Layout name="home">
            <MaintTitle title="home" />
            <NavHome />
         </Layout>
      </>
   );
}
