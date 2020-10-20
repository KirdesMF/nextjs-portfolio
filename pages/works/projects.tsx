import React from 'react';
import Head from 'next/head';
import { css } from 'linaria';

import Layout from '@components/Layout/Layout';
import LinkPages from '@components/LinkPages/LinkPages';
import Carousel from '@components/Carousel/Carousel';
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
      icon: 'eye',
      description: 'Coming soon',
      id: 2,
   },
   {
      name: 'Project Three',
      icon: 'moon',
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
      <>
         <Head>
            <title>{title}</title>
         </Head>
         <Layout name="projects">
            <Carousel datas={datas} />

            <footer className={footer}>
               <LinkPages href="/works" content="back" />
            </footer>
         </Layout>
      </>
   );
}
