import { HeadTag } from '@components/HeadTag/HeadTag';
import { Layout } from '@components/Layout/Layout';
import { MaintTitle } from '@components/MainTitle/MainTitle';
import { ResumePages } from '@components/ResumePages/ResumePages';

const title = 'Ced | Works';

const spanArray = [
   { content: 'Here, you can find' },
   { content: 'my personal & professional projects' },
];

export default function Works() {
   return (
      <>
         <HeadTag title={title} />
         <Layout name="works">
            <MaintTitle title="works" />
            <ResumePages spans={spanArray} />
         </Layout>
         <Layout name="projects">
            <div />
         </Layout>
      </>
   );
}
