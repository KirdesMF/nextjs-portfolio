import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import styles from 'styles/home/home.style';
import THEME from 'Theme/theme';
import { Icon } from '@components/Icon/Icon';

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

export default function Home() {
   return (
      <>
         <Head>
            <title>{title}</title>
         </Head>

         <nav className={styles.nav}>
            <span className={styles.logo}>
               <Icon
                  name="CED"
                  size="30vw"
                  iconColor={THEME.COLORS.background}
               />
            </span>

            <Link href="/about">
               <a className={styles.anchor} data-area="about">
                  <div className={styles.div}>
                     <span className={styles.span}>ABOUT</span>
                     <span className={styles.span}>ABOUT</span>
                     <span className={styles.span}>ABOUT</span>
                     <span className={styles.span}>ABOUT</span>
                     <span className={styles.span}>ABOUT</span>
                  </div>
               </a>
            </Link>

            <Link href="/works">
               <a className={styles.anchor} data-area="works">
                  <div className={styles.div} data-name="works">
                     <span className={styles.span}>WORKS</span>
                     <span className={styles.span}>WORKS</span>
                     <span className={styles.span}>WORKS</span>
                     <span className={styles.span}>WORKS</span>
                     <span className={styles.span}>WORKS</span>
                  </div>
               </a>
            </Link>

            <Link href="/contact">
               <a className={styles.anchor} data-area="contact">
                  <div className={styles.div} data-name="contact">
                     <span className={styles.span}>CONTACT</span>
                     <span className={styles.span}>CONTACT</span>
                     <span className={styles.span}>CONTACT</span>
                     <span className={styles.span}>CONTACT</span>
                     <span className={styles.span}>CONTACT</span>
                  </div>
               </a>
            </Link>
         </nav>
      </>
   );
}
