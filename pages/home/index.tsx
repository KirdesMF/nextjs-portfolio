import React from 'react';
import { Layout } from '@components/Layout/Layout';
import HomeNav from '@components/HomeNav/HomeNav';

const title = 'Ced | Home';
/**
 * Home Pages Component
 */
function Home() {
   return (
      <Layout name="home" title={title}>
         <HomeNav />
      </Layout>
   );
}

/**=============== Export ============ */
export default Home;
