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

         <span className={styles.article}>
            {/* <Icon
               name="CED"
               size="10vw"
               iconColor={THEME.COLORS['primary-100']}
            /> */}

            <svg viewBox="0 0 530 530">
               <path
                  fill="currentColor"
                  d="M393.7,219.3c0-6.3-2.5-12-6.6-16.2c2.8-5.1,3.7-11.3,2-17.3c-1.7-6.1-5.6-10.9-10.6-13.9c1.4-5.7,0.7-11.8-2.5-17.3
                c-3.2-5.4-8.2-9.1-13.8-10.7c-0.1-5.8-2.4-11.6-6.9-16c-4.5-4.4-10.3-6.7-16.1-6.7c-1.6-5.6-5.4-10.6-10.8-13.7
                c-5.5-3.1-11.7-3.8-17.3-2.4c-3-5-7.9-8.8-14-10.4c-6.1-1.6-12.2-0.6-17.3,2.2c-4.2-4-9.9-6.5-16.2-6.5c-6.3,0-12,2.5-16.2,6.6
                c-5.1-2.8-11.3-3.7-17.3-2c-6.1,1.7-10.9,5.6-13.9,10.6c-5.7-1.4-11.8-0.7-17.3,2.5c-5.4,3.2-9.1,8.2-10.7,13.8
                c-5.8,0.1-11.6,2.4-16,6.9c-4.4,4.5-6.7,10.3-6.7,16.1c-5.6,1.6-10.6,5.4-13.7,10.8c-3.1,5.5-3.8,11.7-2.4,17.3
                c-5,3-8.8,7.9-10.4,14c-1.6,6.1-0.6,12.2,2.2,17.3c-4,4.2-6.5,9.9-6.5,16.2c0,6.3,2.5,12,6.6,16.2c-2.8,5.1-3.7,11.3-2,17.3
                c1.7,6.1,5.6,10.9,10.6,13.9c-1.4,5.7-0.7,11.8,2.5,17.3c3.2,5.4,8.2,9.1,13.8,10.7c0.1,5.8,2.4,11.6,6.9,16c3,3,6.6,4.9,10.3,5.9
                v35.3c-0.1,0-0.2,0-0.2,0c-12.8,0-23.2,10.4-23.2,23.2c0,11,7.7,20.2,18,22.6v4.1c0,1.4,1.1,2.6,2.6,2.6s2.6-1.1,2.6-2.6v-3.5
                c0,0,0.1,0,0.1,0c1.2,0,2.4-0.1,3.5-0.3c7.2,24.5,25.8,44.3,49.6,53.2v52.9c0,5.3,4.3,9.6,9.6,9.6h38.3c5.3,0,9.6-4.3,9.6-9.6
                v-53.5c23-9.1,41-28.6,48-52.5c1.1,0.2,2.3,0.3,3.5,0.3c0,0,0.1,0,0.1,0v3.5c0,1.4,1.1,2.6,2.6,2.6s2.6-1.1,2.6-2.6v-4.1
                c10.3-2.4,18-11.6,18-22.6c0-12.8-10.4-23.2-23.2-23.2c-0.1,0-0.2,0-0.2,0v-35.8c4.1-1,8-3,11.1-6.3c4.4-4.5,6.7-10.3,6.7-16.1
                c5.6-1.6,10.6-5.4,13.7-10.8c3.1-5.5,3.8-11.7,2.4-17.3c5-3,8.8-7.9,10.4-14s0.6-12.2-2.2-17.3
                C391.3,231.3,393.7,225.6,393.7,219.3z"
               />
               <circle
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="16.5016"
                  strokeMiterlimit="10"
                  cx="265"
                  cy="265"
                  r="250"
               />
            </svg>
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
      </>
   );
}
