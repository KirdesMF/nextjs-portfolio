import { HeadTag } from '@components/HeadTag/HeadTag';
import { Layout } from '@components/Layout/Layout';
import { ResumePages } from '@components/ResumePages/ResumePages';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Link from 'next/link';

export async function getStaticProps({ locale }: GetStaticPropsContext) {
   const content =
      locale === 'fr'
         ? (await import(`../../locales/fr.json`)).works
         : (await import(`../../locales/en-US.json`)).works;

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
            <ResumePages content={content.content} />
         </Layout>
         <Layout name="projects">
            <div
               style={{
                  position: 'fixed',
                  top: '200px',
                  left: '500px',
                  zIndex: 99,
               }}
            >
               <Link href="/works/[project]" as="/works/zelda">
                  <a>Project</a>
               </Link>
            </div>
         </Layout>
      </>
   );
}
