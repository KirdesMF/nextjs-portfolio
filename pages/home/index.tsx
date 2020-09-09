import React from 'react';
import { Layout } from '@components/Layout/Layout';

const title = 'Ced | Home';
/**
 * Home Pages Component
 */
function Home() {
   return (
      <Layout name="Home" title={title}>
         <h1>Home</h1>
      </Layout>
   );
}

/**=============== Export ============ */
export default Home;
