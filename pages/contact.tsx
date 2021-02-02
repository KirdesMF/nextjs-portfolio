import { HeadTag } from '@components/HeadTag/HeadTag';
import { Layout } from '@components/Layout/Layout';
import { LinkContact } from '@components/LinkContact/LinkContact';

const title = 'Ced | Contact';

export default function Contact() {
   return (
      <>
         <HeadTag title={title} />
         <Layout name="contact">
            <div />
         </Layout>
         <Layout name="contact">
            <LinkContact />
         </Layout>
      </>
   );
}
