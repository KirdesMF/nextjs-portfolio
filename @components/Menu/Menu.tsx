import { css } from '@linaria/core';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { COLORS } from 'Theme/colors';

const MENU = [
   { name: 'home', href: '/' },
   { name: 'about', href: '/about' },
   { name: 'works', href: '/works' },
   { name: 'contact', href: '/contact' },
];
const BTN_SIZE = 45;

export function Menu() {
   const [isOpen, setIsOpen] = useState(false);

   const handleOpenMenu = () => {
      setIsOpen((prev) => !prev);
   };
   return (
      <nav role="navigation" className={nav}>
         <button
            aria-haspopup="true"
            onClick={handleOpenMenu}
            className={button}
         ></button>
         <AnimatePresence>
            {isOpen && (
               <motion.ul className={ul}>
                  {MENU.map(({ name, href }, index) => (
                     <motion.li
                        initial={{
                           x: 60,
                           y: 0,
                        }}
                        animate={{
                           x: 60,
                           y: (BTN_SIZE + 10) * index,
                           transition: {
                              delay: index * 0.01,
                              type: 'spring',
                              mass: 1,
                           },
                        }}
                        exit={{
                           x: 60,
                           y: 0,
                           transition: {
                              delay: index * 0.01,
                              type: 'spring',
                              mass: 0.2,
                           },
                        }}
                        key={name}
                        transition={{
                           delay: index * 0.01,
                           type: 'spring',
                           mass: 1,
                        }}
                     >
                        <Link href={href}>
                           <a>{name}</a>
                        </Link>
                     </motion.li>
                  ))}
               </motion.ul>
            )}
         </AnimatePresence>
      </nav>
   );
}

const nav = css`
   place-self: center;
   display: grid;
   grid-template: 'area' 1fr / 1fr;

   filter: url(#goo) drop-shadow(0px 0px 1.5px black);
`;

const button = css`
   all: unset;
   height: ${BTN_SIZE}px;
   width: ${BTN_SIZE}px;

   border-radius: 50%;
   background: ${COLORS.background};

   grid-area: area;
   display: grid;
   place-items: center;
   z-index: 1;
`;

const ul = css`
   grid-area: area;
   display: grid;
   place-items: center;
   grid-template: 'center' 1fr / 1fr;

   & > li {
      grid-area: center;
      display: grid;
      place-items: center;

      background: ${COLORS.background};
      height: 40px;
      width: 100px;

      & > a {
         text-transform: uppercase;
         font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
         color: ${COLORS.text};
      }
   }
`;
