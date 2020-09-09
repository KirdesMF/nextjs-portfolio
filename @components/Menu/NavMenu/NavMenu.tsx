import React from 'react';
import { SNavMenu } from './NavMenu.styled';
import { Variants, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

type TNavMenu = {
   pathname: ColorName;
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

const variants: Variants = {
   initial: {
      opacity: 0,
   },
   in: {
      opacity: 1,
   },
   out: {
      opacity: 0,
   },
};

export default function NavMenu({ pathname, isOpen, setIsOpen }: TNavMenu) {
   const handleClick = () => setIsOpen((prev) => !prev);
   return (
      <AnimatePresence exitBeforeEnter>
         {isOpen && (
            <SNavMenu.Nav
               className="dark"
               pathname={pathname}
               variants={variants}
               initial="initial"
               animate="in"
               exit="out"
            >
               <SNavMenu.Svg
                  pathname={pathname}
                  viewBox={VIEWBOX}
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  preserveAspectRatio="none"
               >
                  <path d="M0,160L60,181.3C120,203,240,245,360,256C480,267,600,245,720,208C840,171,960,117,1080,85.3C1200,53,1320,43,1380,37.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
               </SNavMenu.Svg>

               {LINKS.map((link) => (
                  <Link key={link.name} href={link.href}>
                     <SNavMenu.Link onClick={handleClick}>
                        {link.name}
                     </SNavMenu.Link>
                  </Link>
               ))}
            </SNavMenu.Nav>
         )}
      </AnimatePresence>
   );
}
