import { HeadTag } from '@components/HeadTag/HeadTag';
import { NameIconType } from '@components/Icon/icons';
import { Layout } from '@components/Layout/Layout';
import { MaintTitle } from '@components/MainTitle/MainTitle';
import { ResumePages } from '@components/ResumePages/ResumePages';
import { SkillPanel } from '@components/SkillPanel/SkillPanel';

const spanArray = [
   { content: 'Hi, I’m Cédric,' },
   { content: 'a Freelance web developer,' },
   { content: 'living in France, near Paris.' },
   { content: 'I love to create websites, apps' },
   { content: 'and everything related to the web.' },
];

const title = 'Ced | About';
const mainTitle = 'about';

const codeIcons: NameIconType[] = ['html', 'css', 'javascript', 'typescript'];

const libsIcons: NameIconType[] = [
   'react',
   'nextjs',
   'styled-components',
   'sass',
   'framer',
   'git',
];

const toolsIcons: NameIconType[] = [
   'illustrator',
   'xd',
   'after effect',
   'blender',
];

export default function About() {
   return (
      <>
         <HeadTag title={title} />
         <Layout name="about">
            <ResumePages spans={spanArray} />
            <MaintTitle title={mainTitle} />
         </Layout>
         <Layout name="skills">
            <SkillPanel
               area="code"
               icons={codeIcons}
               title="code"
               titleIcon="code"
            />
            <SkillPanel
               area="libs"
               icons={libsIcons}
               title="libs"
               titleIcon="gear"
            />
            <SkillPanel
               area="tools"
               icons={toolsIcons}
               title="tools"
               titleIcon="tools"
            />
         </Layout>
      </>
   );
}
