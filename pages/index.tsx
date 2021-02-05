import { Layout } from '@components/Layout/Layout';
import { Introduction } from '@components/Introduction/Introduction';
import { HeadTag } from '@components/HeadTag/HeadTag';
import { InferGetStaticPropsType } from 'next';

export async function getStaticProps() {
   const importedAnimationData = await import(
      '../public/assets/bodymovin/data.json'
   );
   const animationData = JSON.stringify(importedAnimationData);

   return {
      props: {
         animationData,
      },
   };
}
export default function Welcome({
   animationData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
   return (
      <>
         <HeadTag title="Ced | Welcome" />
         <Layout name="intro">
            <Introduction
               animationData={JSON.parse(animationData)}
               title="animation intro"
            />
         </Layout>
      </>
   );
}
