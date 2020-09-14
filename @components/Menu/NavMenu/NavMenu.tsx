import React from 'react';
import { Variants, AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { css } from 'linaria';
import theme from 'Theme/theme';
import { useRouter } from 'next/router';
import { Utils } from 'utils/utils';

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

function NavMenu({ isOpen, setIsOpen }: TNavMenu) {
   const { pathname } = useRouter();
   const customPathname = Utils.customURL(pathname);
   const handleClick = () => setIsOpen((prev) => !prev);

   return (
      <AnimatePresence exitBeforeEnter>
         {isOpen && (
            <motion.nav
               className={nav}
               variants={variants}
               initial="initial"
               animate="in"
               exit="out"
            >
               <svg
                  className={svg}
                  viewBox={VIEWBOX}
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  preserveAspectRatio="none"
               >
                  <path
                     className={`${path} ${customPathname}`}
                     data-color={`${customPathname}`}
                     d="M0,160L60,181.3C120,203,240,245,360,256C480,267,600,245,720,208C840,171,960,117,1080,85.3C1200,53,1320,43,1380,37.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                  ></path>
               </svg>

               {LINKS.map((link) => (
                  <Link key={link.name} href={link.href}>
                     <motion.a className={anchor} onClick={handleClick}>
                        {link.name}
                     </motion.a>
                  </Link>
               ))}
            </motion.nav>
         )}
      </AnimatePresence>
   );
}

export default NavMenu;

const nav = css`
   position: fixed;
   z-index: 15;
   height: 65%;
   width: 30%;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);

   display: grid;
   grid-template-columns: 1fr;
   grid-auto-rows: 1fr;
   grid-gap: 0.5em;
   place-items: center;
   padding: 3em;

   background: ${theme.COLORS.background};
   border-radius: 2em;
   box-shadow: var(--box-shadow-thin);

   transition: background 100ms ease;
`;

const svg = css`
   filter: drop-shadow(0 0 5px ${theme.COLORS['home-secondary-700']});
   position: absolute;
   bottom: 0%;
   height: 30%;
   width: 100%;
   border-bottom-right-radius: inherit;
   border-bottom-left-radius: inherit;
`;

const path = css`
   transition: all 100ms ease;

   stroke-width: 2;
   stroke-linecap: round;

   &[data-color='welcome'] {
      fill: ${theme.COLORS['welcome-secondary-400']};
   }

   &[data-color='home'] {
      fill: ${theme.COLORS['home-secondary-400']};
   }

   &[data-color='about'] {
      fill: ${theme.COLORS['home-primary-100']};
   }
`;

const anchor = css`
   font-family: 'Decovar';
   font-size: 1em;
   color: ${theme.COLORS['home-secondary-700']};
`;
