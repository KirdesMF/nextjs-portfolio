import React from 'react';
import Head from 'next/head';
import { css } from 'linaria';

import ButtonPages from '@components/ButtonPages/ButtonPages';
import MaintTitle from '@components/MainTitle/MainTitle';
import ResumePages from '@components/ResumePages/ResumePages';

const spanArray = [
   { content: 'Hi, I’m Cédric,' },
   { content: 'a Freelance web developer,' },
   { content: 'living in France, near Paris.' },
   { content: 'I love to create websites, apps' },
   { content: 'and everything related to the web.' },
];

const title = 'Ced | About';
const contentBtn = 'Skills set';
const mainTitle = 'about';
const href = '/about/skills';

const left = css`
   width: 100%;
   height: 100%;

   display: grid;
   grid-template:
      '. .' 15%
      'art .' 1fr
      'btn btn' 15%
      '. .' 5%
      /2fr 1fr;

   row-gap: 2%;

   place-items: center;
`;

function About() {
   return (
      <>
         <Head>
            <title>{title}</title>
         </Head>

         <section className={left}>
            <ResumePages spans={spanArray} />
            <MaintTitle title={mainTitle} />
            <ButtonPages href={href} content={contentBtn} />
         </section>
      </>
   );
}

export default About;
