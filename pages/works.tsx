import { HeadTag } from '@components/HeadTag/HeadTag';
import { Layout } from '@components/Layout/Layout';
import { MaintTitle } from '@components/MainTitle/MainTitle';
import { ResumePages } from '@components/ResumePages/ResumePages';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

export async function getStaticProps({ locale }: GetStaticPropsContext) {
   const content =
      locale === 'fr'
         ? (await import(`../locales/fr.json`)).works
         : (await import(`../locales/en-US.json`)).works;

   return {
      props: { content },
   };
}

export default function Works({
   content,
}: InferGetStaticPropsType<typeof getStaticProps>) {
   return (
      <>
         <HeadTag title={content.title} />
         <Layout name="works">
            <MaintTitle title={content.title} />
            <ResumePages content={content.content} />
         </Layout>
         <Layout name="projects">
            <div />
         </Layout>
      </>
   );
}
