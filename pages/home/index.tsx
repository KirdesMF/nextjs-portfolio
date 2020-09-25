import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import styles from 'styles/home/home.style';
import THEME from 'Theme/theme';
import { Icon } from '@components/Icon/Icon';
import { motion, Variants } from 'framer-motion';

const title = 'Ced | Home';

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

const linksArray = [
   {
      area: 'about',
      href: '/about',
      content: 'ABOUT',
   },
   {
      area: 'works',
      href: '/works',
      content: 'WORKS',
   },
   {
      area: 'contact',
      href: '/contact',
      content: 'CONTACT',
   },
];

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

            {linksArray.map((link) => (
               <Link key={link.area} href={link.href}>
                  <motion.a
                     variants={anchorVariants}
                     className={styles.anchor}
                     data-area={link.area}
                  >
                     <div className={styles.div} data-name={link.area}>
                        {Array.from({ length: 5 }).map((_, i) => (
                           <span key={i} className={styles.span}>
                              {link.content}
                           </span>
                        ))}
                     </div>
                  </motion.a>
               </Link>
            ))}
         </nav>
      </>
   );
}
