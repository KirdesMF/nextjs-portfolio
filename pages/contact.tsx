import { HeadTag } from '@components/HeadTag/HeadTag';
import { Layout } from '@components/Layout/Layout';
import { LinkContact } from '@components/LinkContact/LinkContact';
import { MaintTitle } from '@components/MainTitle/MainTitle';
import { ResumePages } from '@components/ResumePages/ResumePages';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

export async function getStaticProps({ locale }: GetStaticPropsContext) {
   const content =
      locale === 'fr'
         ? (await import(`../locales/fr.json`)).contact
         : (await import(`../locales/en-US.json`)).contact;

   return {
      props: { content },
   };
}

export default function Contact({
   content,
}: InferGetStaticPropsType<typeof getStaticProps>) {
   return (
      <>
         <HeadTag title={content.title} />
         <Layout name="contact">
            <ResumePages content={content.content} />
            <MaintTitle title={content.title} />
         </Layout>
         <Layout name="contact">
            <LinkContact />
         </Layout>
      </>
   );
}
