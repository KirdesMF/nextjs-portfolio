import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';

import style from './NavMenu.style';
import variants from './NavMenu.variants';

type TNavMenu = {
   isOpen: boolean;
   setIsOpen: (value: React.SetStateAction<boolean>) => void;
};

const LINKS = [
   { name: 'home', href: '/home' },
   { name: 'about', href: '/about' },
   { name: 'works', href: '/works' },
   { name: 'contact', href: '/contact' },
];

export default function NavMenu({ isOpen, setIsOpen }: TNavMenu) {
   const { pathname } = useRouter();

   const handleClick = () => setIsOpen((prev) => !prev);

   return (
      <AnimatePresence exitBeforeEnter>
         {isOpen && (
            <nav className={style.nav}>
               {LINKS.map((link, i) => (
                  <Link key={link.name} href={link.href}>
                     <motion.a
                        className={style.anchor}
                        onClick={handleClick}
                        animate="in"
                        exit="out"
                        initial="initial"
                        custom={i}
                        variants={variants.nav}
                     >
                        <span
                           className={style.span}
                           data-active={
                              pathname.substr(1) === link.name ? 'active' : ''
                           }
                        >
                           {link.name}
                        </span>
                     </motion.a>
                  </Link>
               ))}
            </nav>
         )}
      </AnimatePresence>
   );
}
