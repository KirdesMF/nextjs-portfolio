import React, { useRef } from 'react';
import Head from 'next/head';
import { css } from 'linaria';

import ButtonPages from '@components/ButtonPages/ButtonPages';
import ResumePages from '@components/ResumePages/ResumePages';

const title = 'Ced | About';

const spanArray = [
   { content: 'Hi, I’m Cédric,' },
   { content: 'a Freelance web developer,' },
   { content: 'living in France, near Paris.' },
   { content: 'I love to create websites, apps' },
   { content: 'and everything related to the web.' },
];

const contentBtn = 'Skills set';

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

const right = css`
   width: 100%;
   height: 100%;
`;
function About() {
   const sectionRef = useRef<HTMLElement>(null!);

   function handleClick() {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
   }

   return (
      <>
         <Head>
            <title>{title}</title>
         </Head>

         <section className={left}>
            <ResumePages spans={spanArray} />
            <ButtonPages onClick={handleClick} content={contentBtn} />
         </section>

         <section ref={sectionRef} className={right}></section>
      </>
   );
}

export default About;
