import React from 'react';
import Head from 'next/head';

import style from 'styles/about/about.style';
import { motion, Variants } from 'framer-motion';

const title = 'Ced | About';

const articleVariants: Variants = {
   in: {
      transition: {
         staggerChildren: 0.1,
         delayChildren: 1.7,
      },
   },
   out: {
      transition: {
         staggerChildren: 0.1,
      },
   },
};

const spanVariants: Variants = {
   in: {
      rotate: 0,
      opacity: 1,
      transition: {
         duration: 1,
         ease: 'circOut',
      },
   },
   out: {
      rotate: 5,
      opacity: 0,
      transition: {
         duration: 1,
         ease: 'circIn',
      },
   },
};

function About() {
   return (
      <>
         <Head>
            <title>{title}</title>
         </Head>

         <section className={style.left}>
            <motion.article
               variants={articleVariants}
               className={style.presentation}
            >
               <motion.span variants={spanVariants}>
                  Hi, I'm Cédric,
               </motion.span>
               <motion.span variants={spanVariants}>
                  a Freelance web developer,
               </motion.span>
               <motion.span variants={spanVariants}>
                  living in France, near Paris.
               </motion.span>
               <motion.span variants={spanVariants}>
                  Keeping Accessibilty right,
               </motion.span>
               <motion.span variants={spanVariants}>
                  I love to create websites, apps
               </motion.span>
               <motion.span variants={spanVariants}>
                  and everything related to the web.
               </motion.span>
            </motion.article>
            <button className={style.button}>SKILLS SET</button>
         </section>

         <section></section>
      </>
   );
}

export default About;
