import { HeadTag } from '@components/HeadTag/HeadTag';
import { Layout } from '@components/Layout/Layout';
import { NavHome } from '@components/NavHome/NavHome';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';

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
   const router = useRouter();
   const { locale } = router;

   const changeLanguage = () => {
      router.push('/home', '/home', {
         locale: locale === 'fr' ? 'en-US' : 'fr',
      });
   };
   return (
      <>
         <HeadTag title={content.home.title} />
         <Layout name="home">
            <button
               style={{ position: 'fixed', top: '50px', left: '350px' }}
               onClick={changeLanguage}
            >
               {locale}
            </button>
         </Layout>
         <Layout name="home">
            <NavHome content={content.sections} />
         </Layout>
      </>
   );
}
