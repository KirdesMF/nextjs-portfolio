import { Layout } from '@components/Layout/Layout';
import { Introduction } from '@components/Introduction/Introduction';
import { HeadTag } from '@components/HeadTag/HeadTag';

export default function Welcome() {
   return (
      <>
         <HeadTag title="Ced | Welcome" />
         <Layout name="intro">
            <Introduction />
         </Layout>
      </>
   );
}
