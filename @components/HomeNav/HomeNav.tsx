import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

import THEME from 'Theme/theme';
import styles from './HomeNav.style';
import variants from './HomeNav.variants';

import { NameIconType } from '@components/Icon/icons';
import { Icon } from '@components/Icon/Icon';
import { useRouter } from 'next/router';

const sizeIcon = '3rem';

const links = [
   {
      href: '/about',
      data: 'about',
      icon: 'info',
      custom: 2,
   },
   {
      href: '/works',
      data: 'works',
      icon: 'briefcase',
      custom: 1,
   },
   {
      href: '/contact',
      data: 'contact',
      icon: 'phone',
      custom: -2,
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
         <motion.button
            onClick={handleClick}
            className={styles.button}
            variants={variants.button}
         >
            <Icon
               name="dots"
               size={sizeIcon}
               iconColor={THEME.COLORS['secondary-300']}
            />
         </motion.button>

         <AnimatePresence exitBeforeEnter>
            {isOpen && (
               <>
                  {links.map((link, i) => (
                     <Link key={link.data} href={link.href}>
                        <motion.a
                           className={styles.anchor}
                           data-anchor={link.data}
                           variants={variants.anchor}
                           animate="in"
                           initial="out"
                           exit="out"
                           custom={link.custom}
                           onClick={handleClick}
                        >
                           <Icon
                              name={link.icon as NameIconType}
                              iconColor="white"
                              size={sizeIcon}
                           />
                        </motion.a>
                     </Link>
                  ))}
               </>
            )}
         </AnimatePresence>
      </nav>
   );
}

export default HomeNav;
