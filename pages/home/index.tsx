import React from 'react';
import HomeNav from '@components/HomeNav/HomeNav';
import Head from 'next/head';

const title = 'Ced | Home';
/**
 * Home Pages Component
 */
function Home() {
   return (
      <React.Fragment>
         <Head>
            <title>{title}</title>
         </Head>
         <HomeNav />
      </React.Fragment>
   );
}

/**=============== Export ============ */
export default Home;
