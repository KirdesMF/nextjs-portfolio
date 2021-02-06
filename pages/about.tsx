import { HeadTag } from '@components/HeadTag/HeadTag';
import { NameIconType } from '@components/Icon/icons';
import { Layout } from '@components/Layout/Layout';
import { MaintTitle } from '@components/MainTitle/MainTitle';
import { ResumePages } from '@components/ResumePages/ResumePages';
import { SkillPanel } from '@components/SkillPanel/SkillPanel';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

export async function getStaticProps({ locale }: GetStaticPropsContext) {
   const datas = (await import('../data/data.json')).default;
   const content =
      locale === 'fr'
         ? (await import(`../locales/fr.json`)).about
         : (await import(`../locales/en-US.json`)).about;

   return {
      props: {
         datas,
         content,
      },
   };
}

export default function About({
   content,
   datas,
}: InferGetStaticPropsType<typeof getStaticProps>) {
   return (
      <>
         <HeadTag title={content.title} />
         <Layout name="about">
            <ResumePages content={content.content} />
            <MaintTitle title={content.title} />
         </Layout>
         <Layout name="about">
            <SkillPanel
               area="code"
               icons={datas.codeIcons as NameIconType[]}
               title="code"
               titleIcon="code"
            />
            <SkillPanel
               area="libs"
               icons={datas.libsIcons as NameIconType[]}
               title="libs"
               titleIcon="gear"
            />
            <SkillPanel
               area="tools"
               icons={datas.toolsIcons as NameIconType[]}
               title="tools"
               titleIcon="tools"
            />
         </Layout>
      </>
   );
}
