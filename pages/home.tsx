import Layout from '@components/Layout/Layout';

import MaintTitle from '@components/MainTitle/MainTitle';
import NavHome from '@components/NavHome/NavHome';

const title = 'Ced | Home';

export default function Home() {
   return (
      <Layout name="home" title={title}>
         <MaintTitle title="home" />
         <NavHome />
      </Layout>
   );
}
