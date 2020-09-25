import ButtonPages from '@components/ButtonPages/ButtonPages';
import ResumePages from '@components/ResumePages/ResumePages';
import { css } from 'linaria';
import Head from 'next/head';
import React from 'react';

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
   { content: 'We can connect by socal media,' },
   { content: 'mail or even discord' },
];

const contentBtn = 'get in touch';

function Contact() {
   return (
      <React.Fragment>
         <Head>
            <title>{title}</title>
         </Head>
         <section className={left}>
            <ResumePages spans={spanArray} />
            <ButtonPages content={contentBtn} />
         </section>
      </React.Fragment>
   );
}

export default Contact;
