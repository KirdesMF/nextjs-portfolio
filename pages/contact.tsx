import Layout from '@components/Layout/Layout';
import { LinkContact } from '@components/LinkContact/LinkContact';

const title = 'Ced | Contact';

export default function Contact() {
   return (
      <Layout name="contact" title={title}>
         <LinkContact />
      </Layout>
   );
}
