import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

import THEME from 'Theme/theme';
import styles from './HomeNav.style';
import variants from './HomeNav.variants';

import { useRouter } from 'next/router';
import HexesHomeNav from './HexesHomeNav/HexesHomeNav';
import { Icon } from '@components/Icon/Icon';
import { link } from 'fs';
import { NameIconType } from '@components/Icon/icons';

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

function HomeNav() {
   const [isOpen, setIsOpen] = useState(false);
   const router = useRouter();

   function handleClick() {
      setIsOpen((prev) => !prev);
   }

   useEffect(() => {
      setIsOpen(false);
   }, [router.pathname]);

   return (
      <nav className={styles.nav}>
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
      </nav>
   );
}

export default HomeNav;
