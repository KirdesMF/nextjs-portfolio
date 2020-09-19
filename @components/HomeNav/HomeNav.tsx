import React, { useState } from 'react';
import Link from 'next/link';

import { AnimatePresence, motion } from 'framer-motion';
import { Icon } from '@components/Icon/Icon';

import styles from './HomeNav.style';
import variants from './HomeNav.variants';
import { NameIconType } from '@components/Icon/icons';

const sizeIcon = '1.5rem';

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

   function handleClick() {
      setIsOpen((prev) => !prev);
   }

   return (
      <nav className={styles.nav}>
         <motion.button
            onClick={handleClick}
            className={styles.button}
            variants={variants.button}
            animate="in"
            exit="out"
         >
            <Icon name="dots" size={sizeIcon} iconColor="white" />
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
                           custom={i}
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
