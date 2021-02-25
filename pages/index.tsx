import { HeadTag } from '@components/HeadTag/HeadTag';
import { Layout } from '@components/Layout/Layout';
import { NavHome } from '@components/NavHome/NavHome';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
   const content =
      locale === 'fr'
         ? (await import(`../locales/fr.json`)).default
         : (await import(`../locales/en-US.json`)).default;

   const data = (await import(`../data/data.json`)).default;

   return {
      props: {
         content,
         data,
      },
   };
};

export default function Home({
   content,
   data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
   if (!data) return <div>Load</div>;

   return (
      <>
         <HeadTag title={content.home.title} />
         <Layout>
            <NavHome content={['about', 'works', 'contact']} />
         </Layout>
      </>
   );
}
