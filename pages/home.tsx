import { HeadTag } from '@components/HeadTag/HeadTag';
import { Layout } from '@components/Layout/Layout';
import { NavHome } from '@components/NavHome/NavHome';
import { InferGetStaticPropsType } from 'next';

import data from '../data/data.json';

// export const getStaticProps = async () => {
//    const content = (await import('../data/data.json')).default;

//    return {
//       props: {
//          content,
//       },
//    };
// };

export default function Home() {
   return (
      <>
         <HeadTag title={data[0].title} />
         <Layout name="home">
            <div></div>
         </Layout>
         <Layout name="home">
            <NavHome />
         </Layout>
      </>
   );
}
