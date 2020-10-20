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

   const handleClick = () => setIsOpen(false);

   return (
      <AnimatePresence>
         {isOpen && (
            <motion.section
               animate="in"
               exit="out"
               initial="out"
               variants={variants.section}
               className={style.section}
            >
               <nav className={style.nav}>
                  <AnimatePresence exitBeforeEnter>
                     {LINKS.map((link, i) => (
                        <Link key={link.name} href={link.href}>
                           <motion.a
                              className={style.anchor}
                              onClick={handleClick}
                              custom={i}
                              variants={variants.anchor}
                              animate="in"
                              exit="out"
                              initial="out"
                           >
                              <motion.span
                                 variants={variants.span}
                                 custom={i}
                                 animate="in"
                                 exit="out"
                                 initial="out"
                                 className={style.span}
                                 data-active={
                                    pathname === link.href ? 'active' : ''
                                 }
                              >
                                 {link.name}
                              </motion.span>
                           </motion.a>
                        </Link>
                     ))}
                  </AnimatePresence>
               </nav>

               <motion.div
                  variants={variants.overlay}
                  className={style.overlay}
               ></motion.div>
            </motion.section>
         )}
      </AnimatePresence>
   );
}
