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
   { content: 'We can connect by socal media,' },
   { content: 'mail or even discord' },
];

const contentBtn = 'get in touch';
const href = '/contact/social';
const mainTitle = 'contact';

function Contact() {
   return (
      <React.Fragment>
         <Head>
            <title>{title}</title>
         </Head>
         <section className={left}>
            <MaintTitle title={mainTitle} />
            <ResumePages spans={spanArray} />
            <ButtonPages content={contentBtn} href={href} />
         </section>
      </React.Fragment>
   );
}

export default Contact;
