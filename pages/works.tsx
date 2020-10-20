import Head from 'next/head';
import Layout from '@components/Layout/Layout';
import LinkPages from '@components/LinkPages/LinkPages';
import MaintTitle from '@components/MainTitle/MainTitle';
import ResumePages from '@components/ResumePages/ResumePages';

const title = 'Ced | Works';

const spanArray = [
   { content: 'Here, you can find' },
   { content: 'my personal & professional projects' },
];

const contentBtn = 'Projects';

export default function Works() {
   return (
      <>
         <Head>
            <title>{title}</title>
         </Head>
         <Layout name="works">
            <MaintTitle title="works" />
            <ResumePages spans={spanArray} />
            <LinkPages content={contentBtn} href="/works/projects" />
         </Layout>
      </>
   );
}
