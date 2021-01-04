import { css } from '@linaria/core';
import { Layout } from '@components/Layout/Layout';
import { LinkPages } from '@components/LinkPages/LinkPages';
import { NameIconType } from '@components/Icon/icons';

type Data = {
   name: string;
   icon: NameIconType;
   description: string;
   id: number;
};
const datas: Data[] = [
   {
      name: 'Project One',
      icon: 'tools',
      description: 'Coming soon Wesh',
      id: 1,
   },
   {
      name: 'Project Two',
      icon: 'phone',
      description: 'Coming soon',
      id: 2,
   },
   {
      name: 'Project Three',
      icon: 'svg',
      description: 'Coming soon',
      id: 3,
   },
   {
      name: 'Project Four',
      icon: 'google',
      description: 'Coming soon',
      id: 4,
   },
];

const footer = css`
   grid-area: footer;
   z-index: 2;
`;

const title = 'Ced | Projects';

export default function Projects() {
   return (
      <Layout name="projects" title={title}>
         <footer className={footer}>
            <LinkPages href="/works" content="back" />
         </footer>
      </Layout>
   );
}
