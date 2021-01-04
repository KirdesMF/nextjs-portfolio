import { Layout } from '@components/Layout/Layout';
import { Introduction } from '@components/Introduction/Introduction';

export default function Welcome() {
   return (
      <Layout name="intro" title="Ced | Welcome">
         <Introduction />
      </Layout>
   );
}
