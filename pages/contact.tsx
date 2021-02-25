import { HeadTag } from '@components/HeadTag/HeadTag';
import { Layout } from '@components/Layout/Layout';
import { ResumePages } from '@components/ResumePages/ResumePages';
import { LinkContact } from '@components/LinkContact/LinkContact';
import {
   GetStaticProps,
   GetStaticPropsContext,
   InferGetStaticPropsType,
} from 'next';
import { HexesGrid } from '@components/HexesGrid/HexesGrid';

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
         </Layout>
         <Layout name="contact">
            <LinkContact />
         </Layout>
      </>
   );
}
