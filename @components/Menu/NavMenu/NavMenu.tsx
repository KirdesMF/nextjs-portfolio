import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Utils } from 'utils/utils';

import style from './NavMenu.style';
import variants from './NavMenu.variants';

type TNavMenu = {
   isOpen: boolean;
   setIsOpen: (value: React.SetStateAction<boolean>) => void;
};

const VIEWBOX = `0 0 1440 320`;
const LINKS = [
   { name: 'home', href: '/home' },
   { name: 'about', href: '/about' },
   { name: 'works', href: '/works' },
   { name: 'contact', href: '/contact' },
];

function NavMenu({ isOpen, setIsOpen }: TNavMenu) {
   const { pathname } = useRouter();
   const customPathname = Utils.customURL(pathname);

   const handleClick = () => setIsOpen((prev) => !prev);

   return (
      <AnimatePresence exitBeforeEnter>
         {isOpen && (
            <>
               <motion.nav className={style.nav}>
                  {LINKS.map((link, i) => (
                     <Link key={link.name} href={link.href}>
                        <motion.a
                           tabIndex={0}
                           variants={variants.nav}
                           className={style.anchor}
                           onClick={handleClick}
                           custom={i}
                           animate="in"
                           exit="out"
                           initial="initial"
                        >
                           <span
                              className={style.span}
                              data-active={
                                 pathname.substr(1) === link.name
                                    ? 'active'
                                    : ''
                              }
                           >
                              {link.name}
                           </span>
                        </motion.a>
                     </Link>
                  ))}
               </motion.nav>

               {/* <svg
                  className={style.svg}
                  viewBox={VIEWBOX}
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  preserveAspectRatio="none"
               >
                  <path
                     className={`${style.path} ${customPathname}`}
                     data-color={`${customPathname}`}
                     d="M0,160L60,181.3C120,203,240,245,360,256C480,267,600,245,720,208C840,171,960,117,1080,85.3C1200,53,1320,43,1380,37.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                  ></path>
               </svg> */}
            </>
         )}
      </AnimatePresence>
   );
}

export default NavMenu;
