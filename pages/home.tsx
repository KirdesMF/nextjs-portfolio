import { HeadTag } from '@components/HeadTag/HeadTag';
import { Layout } from '@components/Layout/Layout';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
   const content =
      locale === 'fr'
         ? (await import(`../locales/fr.json`)).default
         : (await import(`../locales/en-US.json`)).default;

   return {
      props: {
         content,
      },
   };
};

export default function Home({
   content,
}: InferGetStaticPropsType<typeof getStaticProps>) {
   return (
      <>
         <HeadTag title={content.home.title} />
         <Layout name="home">
            <div></div>
         </Layout>
         <Layout name="home">
            <div></div>
         </Layout>
      </>
   );
}
