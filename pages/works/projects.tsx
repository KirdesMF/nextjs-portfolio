import LinkPages from '@components/LinkPages/LinkPages';
import Carousel from '@components/Carousel/Carousel';
import { NameIconType } from '@components/Icon/icons';
import { motion } from 'framer-motion';
import { css } from 'linaria';
import React from 'react';
import THEME from 'Theme/theme';

type Data = {
   name: string;
   icon: NameIconType;
   description: string;
};
const datas: Data[] = [
   {
      name: 'Project One',
      icon: 'tools',
      description: 'Coming soon Wesh',
   },
   {
      name: 'Project Two',
      icon: 'eye',
      description: 'Coming soon',
   },
   {
      name: 'Project Three',
      icon: 'moon',
      description: 'Coming soon',
   },
   {
      name: 'Project Four',
      icon: 'google',
      description: 'Coming soon',
   },
];

const footer = css`
   grid-area: footer;
   z-index: 2;
`;

export default function Projects() {
   return (
      <>
         <Carousel datas={datas} />

         <footer className={footer}>
            <LinkPages href="/works" content="back" />
         </footer>
      </>
   );
}
