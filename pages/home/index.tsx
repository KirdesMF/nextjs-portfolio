import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import styles from 'styles/home/home.style';
import THEME from 'Theme/theme';
import { Icon } from '@components/Icon/Icon';
import { motion, Variants } from 'framer-motion';

const title = 'Ced | Home';

const dataSocial = [
   {
      id: 'twitter',
      url: 'https://twitter.com/CedricGourville',
      icon: 'TWITTER',
   },
   {
      id: 'linkedin',
      url: 'https://fr.linkedin.com/in/cedric-gourville',
      icon: 'LINKEDIN',
   },
   {
      id: 'github',
      url: 'https://github.com/CedGrvl',
      icon: 'GITHUB',
   },

   {
      id: 'devto',
      url: 'https://dev.to/cedricgourville',
      icon: 'DEVTO',
   },
];

const anchorVariants: Variants = {
   in: {
      opacity: 1,
      transition: {
         duration: 0.5,
         ease: 'circIn',
      },
   },
   out: {
      opacity: 0,
      transition: {
         duration: 0.5,
         ease: 'circIn',
      },
   },
};

const logoVariants: Variants = {
   in: {
      opacity: 1,
      y: 0,
      transition: {
         delay: 0.5,
         duration: 1,
         ease: 'linear',
      },
   },
   out: {
      opacity: 0,
      y: -50,

      transition: {
         duration: 1,
         ease: 'linear',
      },
   },
};

export default function Home() {
   return (
      <>
         <Head>
            <title>{title}</title>
         </Head>

         <nav className={styles.nav}>
            <motion.span variants={logoVariants} className={styles.logo}>
               <Icon
                  name="CED"
                  size="30vw"
                  iconColor={THEME.COLORS.background}
               />
            </motion.span>

            <Link href="/about">
               <motion.a
                  variants={anchorVariants}
                  className={styles.anchor}
                  data-area="about"
               >
                  <div className={styles.div}>
                     <span className={styles.span}>ABOUT</span>
                     <span className={styles.span}>ABOUT</span>
                     <span className={styles.span}>ABOUT</span>
                     <span className={styles.span}>ABOUT</span>
                     <span className={styles.span}>ABOUT</span>
                  </div>
               </motion.a>
            </Link>

            <Link href="/works">
               <motion.a
                  variants={anchorVariants}
                  className={styles.anchor}
                  data-area="works"
               >
                  <div className={styles.div} data-name="works">
                     <span className={styles.span}>WORKS</span>
                     <span className={styles.span}>WORKS</span>
                     <span className={styles.span}>WORKS</span>
                     <span className={styles.span}>WORKS</span>
                     <span className={styles.span}>WORKS</span>
                  </div>
               </motion.a>
            </Link>

            <Link href="/contact">
               <motion.a
                  variants={anchorVariants}
                  className={styles.anchor}
                  data-area="contact"
               >
                  <div className={styles.div} data-name="contact">
                     <span className={styles.span}>CONTACT</span>
                     <span className={styles.span}>CONTACT</span>
                     <span className={styles.span}>CONTACT</span>
                     <span className={styles.span}>CONTACT</span>
                     <span className={styles.span}>CONTACT</span>
                  </div>
               </motion.a>
            </Link>
         </nav>
      </>
   );
}
