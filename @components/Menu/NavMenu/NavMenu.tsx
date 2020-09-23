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
            <motion.section
               animate="in"
               exit="out"
               initial="out"
               variants={variants.section}
               className={style.section}
            >
               <motion.nav
                  animate="in"
                  exit="out"
                  initial="out"
                  className={style.nav}
               >
                  {LINKS.map((link, i) => (
                     <Link key={link.name} href={link.href}>
                        <motion.a
                           className={style.anchor}
                           onClick={handleClick}
                           custom={i}
                           variants={variants.anchor}
                        >
                           <motion.span
                              variants={variants.span}
                              custom={i}
                              className={style.span}
                              data-active={
                                 pathname.substr(1) === link.name
                                    ? 'active'
                                    : ''
                              }
                           >
                              {link.name}
                           </motion.span>
                        </motion.a>
                     </Link>
                  ))}
               </motion.nav>

               <motion.div
                  variants={variants.overlay}
                  className={style.overlay}
               ></motion.div>
            </motion.section>
         )}
      </AnimatePresence>
   );
}
