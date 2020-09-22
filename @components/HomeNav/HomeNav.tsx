import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import THEME from 'Theme/theme';
import styles from './HomeNav.style';

import HexesHomeNav from './HexesHomeNav/HexesHomeNav';
import { Icon } from '@components/Icon/Icon';
import { NameIconType } from '@components/Icon/icons';
import { AnimatePresence, motion, Variants } from 'framer-motion';

const links = [
   {
      href: '/about',
      data: 'about',
      icon: 'info',
   },
   {
      href: '/works',
      data: 'works',
      icon: 'briefcase',
   },
   {
      href: '/contact',
      data: 'contact',
      icon: 'phone',
   },
];

const variants: Variants = {
   in: {
      opacity: 1,
   },
   out: {
      opacity: 0,
   },
};

type HomeNavProps = {
   isOpen: boolean;
};
function HomeNav({ isOpen }: HomeNavProps) {
   return (
      <AnimatePresence exitBeforeEnter>
         {isOpen && (
            <motion.nav
               variants={variants}
               animate="in"
               exit="out"
               initial="out"
               className={styles.nav}
            >
               {links.map((link, i) => (
                  <Link key={link.data} href={link.href}>
                     <a className={styles.anchor}>
                        <span className={styles.span}>
                           <Icon
                              name={link.icon as NameIconType}
                              size="2em"
                              iconColor={THEME.COLORS['primary-700']}
                              hover={THEME.COLORS['grey-400']}
                           />
                        </span>
                        <HexesHomeNav />
                     </a>
                  </Link>
               ))}
            </motion.nav>
         )}
      </AnimatePresence>
   );
}

export default HomeNav;
