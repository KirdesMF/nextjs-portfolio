import { Layout } from '@components/Layout/Layout';
import { Introduction } from '@components/Introduction/Introduction';
import { HeadTag } from '@components/HeadTag/HeadTag';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

export async function getStaticProps({ locale }: GetStaticPropsContext) {
   const importedAnimationData = await import('../data/lottie/intro.json');
   const animationData = JSON.stringify(importedAnimationData);

   const content =
      locale === 'fr'
         ? (await import(`../locales/fr.json`)).intro
         : (await import(`../locales/en-US.json`)).intro;

   return {
      props: {
         animationData,
         content,
      },
   };
}
export default function Welcome({
   animationData,
   content,
}: InferGetStaticPropsType<typeof getStaticProps>) {
   return (
      <>
         <HeadTag title={content.title} />
         <Layout name="intro">
            <Introduction
               animationData={JSON.parse(animationData)}
               title={content.content}
            />
         </Layout>
      </>
   );
}
