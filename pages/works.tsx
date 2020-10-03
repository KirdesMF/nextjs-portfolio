import { css } from 'linaria';
import Head from 'next/head';

import LinkPages from '@components/LinkPages/LinkPages';
import MaintTitle from '@components/MainTitle/MainTitle';
import ResumePages from '@components/ResumePages/ResumePages';
import { motion } from 'framer-motion';

const title = 'Ced | Works';

const section = css`
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
      <>
         <Head>
            <title>{title}</title>
         </Head>
         <motion.section className={section}>
            <MaintTitle title="works" />
            <ResumePages spans={spanArray} />
            <LinkPages content={contentBtn} href="/works/projects" />
         </motion.section>
      </>
   );
}

export default Works;
