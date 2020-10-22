import { NameIconType } from '@components/Icon/icons';
import Layout from '@components/Layout/Layout';
import { SkillPanel } from '@components/SkillPanel/SkillPanel';

const title = 'Ced | Skills';

const codeIcons: NameIconType[] = ['html', 'css', 'javascript', 'typescript'];

const libsIcons: NameIconType[] = [
   'react',
   'nextjs',
   'styled-components',
   'sass',
   'framer',
];

const toolsIcons: NameIconType[] = [
   'vscode',
   'git',
   'illustrator',
   'after effect',
   'blender',
];

export default function Skills() {
   return (
      <Layout name="skills" title={title}>
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
   );
}
