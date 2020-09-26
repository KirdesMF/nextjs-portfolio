import React from 'react';
import { css } from 'linaria';
import Head from 'next/head';

import ButtonPages from '@components/ButtonPages/ButtonPages';
import MaintTitle from '@components/MainTitle/MainTitle';
import ResumePages from '@components/ResumePages/ResumePages';

const title = 'Ced | Works';

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

const spanArray = [
   { content: 'Here, you can find' },
   { content: 'my personal & professional projects' },
];

const contentBtn = 'Projects';

function Works() {
   return (
      <React.Fragment>
         <Head>
            <title>{title}</title>
         </Head>
         <section className={left}>
            <MaintTitle title="works" />
            <ResumePages spans={spanArray} />
            <ButtonPages content={contentBtn} href="/works/projects" />
         </section>
      </React.Fragment>
   );
}

export default Works;
