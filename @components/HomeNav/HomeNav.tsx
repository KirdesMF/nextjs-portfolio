import React from 'react';
import Link from 'next/link';

import * as styles from './HomeNav.style';
import { motion, Variants } from 'framer-motion';

const navVariants: Variants = {
   initial: {
      opacity: 0,
   },
   out: {
      opacity: 0,
      transition: {
         staggerChildren: 0.2,
         when: 'afterChildren',
      },
   },
   in: {
      opacity: 1,
      transition: {
         delayChildren: 0.8,
         staggerChildren: 0.2,
      },
   },
};

const anchorVariants: Variants = {
   initial: {
      opacity: 0,
      y: 30,
   },

   in: {
      opacity: 1,
      y: 0,
   },

   out: {
      opacity: 0,
      y: 30,
   },
};

function HomeNav() {
   return (
      <motion.nav
         variants={navVariants}
         initial="initial"
         animate="in"
         exit="out"
         className={styles.nav}
      >
         <Link href="/about">
            <motion.a className={styles.anchor} variants={anchorVariants}>
               ABOUT
            </motion.a>
         </Link>

         <Link href="/works">
            <motion.a className={styles.anchor} variants={anchorVariants}>
               WORKS
            </motion.a>
         </Link>

         <Link href="/contact">
            <motion.a className={styles.anchor} variants={anchorVariants}>
               CONTACT
            </motion.a>
         </Link>
      </motion.nav>
   );
}

export default HomeNav;
