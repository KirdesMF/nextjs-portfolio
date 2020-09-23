import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import styles from 'styles/home/home.style';

const title = 'Ced | Home';

export default function Home() {
   return (
      <>
         <Head>
            <title>{title}</title>
         </Head>

         <Link href="/about">
            <a className={styles.anchor} data-area="about">
               <span className={styles.span}>ABOUT</span>
            </a>
         </Link>

         <Link href="/works">
            <a className={styles.anchor} data-area="works">
               <span className={styles.span}>WORKS</span>
            </a>
         </Link>

         <Link href="/contact">
            <a className={styles.anchor} data-area="contact">
               <span className={styles.span}>CONTACT</span>
            </a>
         </Link>
      </>
   );
}
