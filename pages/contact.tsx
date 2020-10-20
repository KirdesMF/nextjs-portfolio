import Head from 'next/head';
import Layout from '@components/Layout/Layout';
import LinkPages from '@components/LinkPages/LinkPages';
import MaintTitle from '@components/MainTitle/MainTitle';
import ResumePages from '@components/ResumePages/ResumePages';

const title = 'Ced | Contact';

const spanArray = [
   { content: 'We can connect by socal medias,' },
   { content: 'mail or even discord' },
];

const contentBtn = 'get in touch';
const href = '/contact/social';
const mainTitle = 'contact';

export default function Contact() {
   return (
      <>
         <Head>
            <title>{title}</title>
         </Head>
         <Layout name="contact">
            <MaintTitle title={mainTitle} />
            <ResumePages spans={spanArray} />
            <LinkPages content={contentBtn} href={href} />
         </Layout>
      </>
   );
}
