import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

import { NameIconType } from '@components/Icon/icons';
import { TCube, TPoint } from 'utils/hexagons/convert';
import { cubeSpiral } from 'utils/hexagons/helpers';

import styles from './home.style';
import variants from './home.variants';

import THEME from 'Theme/theme';
import { Icon } from '@components/Icon/Icon';
import Hexagon from '@components/Hexagon/Hexagon';

const VIEWBOX = `0 0 100 100`;
const ORIGIN: TPoint = { x: 50, y: 50 };
const ORIGIN_CUBE: TCube = { q: 0, r: 0, s: 0 };
const SIZE_HEX = 5;
const HEXMAP = cubeSpiral({ center: ORIGIN_CUBE, radius: 1 });
const HEXMAP3 = cubeSpiral({ center: ORIGIN_CUBE, radius: 3 });

const title = 'Ced | Home';
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

export default function Home() {
   const router = useRouter();
   const [isOpen, setIsOpen] = useState(false);

   function handleClick() {
      setIsOpen((prev) => !prev);
   }

   useEffect(() => {
      setIsOpen(false);
   }, [router.pathname]);

   return (
      <>
         <Head>
            <title>{title}</title>
         </Head>

         <section className={styles.section}>
            <article className={styles.article}>
               <motion.p variants={variants.text}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Harum, ipsam quasi aspernatur ad dolores maiores.
               </motion.p>
            </article>

            <motion.hr variants={variants.hr} className={styles.hr} />

            <button onClick={handleClick} className={styles.button}>
               <motion.span variants={variants.button}>
                  <Icon
                     name="chevron"
                     size="2em"
                     iconColor={THEME.COLORS['primary-500']}
                     rotation="180deg"
                  />
               </motion.span>
            </button>

            <AnimatePresence exitBeforeEnter>
               {isOpen && (
                  <motion.nav
                     initial="out"
                     animate="in"
                     exit="out"
                     className={styles.nav}
                  >
                     {links.map((link) => (
                        <Link key={link.data} href={link.href}>
                           <motion.a className={styles.anchor}>
                              <span className={styles.span}>
                                 <Icon
                                    name={link.icon as NameIconType}
                                    size="1.5em"
                                    iconColor={THEME.COLORS['primary-700']}
                                    hover={THEME.COLORS['grey-400']}
                                 />
                              </span>

                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 version="1.1"
                                 preserveAspectRatio="xMidYMid"
                                 aria-hidden="true"
                                 focusable="false"
                                 viewBox={VIEWBOX}
                              >
                                 {HEXMAP.map((hexes, i) => {
                                    return (
                                       <Hexagon
                                          key={i}
                                          custom={i}
                                          variants={variants.hex}
                                          originHex={ORIGIN}
                                          cube={hexes}
                                          sizeHex={SIZE_HEX}
                                       />
                                    );
                                 })}

                                 {HEXMAP3.map((hexes, i) => {
                                    return (
                                       <Hexagon
                                          key={i}
                                          custom={i}
                                          variants={variants.hex}
                                          originHex={ORIGIN}
                                          cube={hexes}
                                          sizeHex={SIZE_HEX}
                                       />
                                    );
                                 })}
                              </svg>
                           </motion.a>
                        </Link>
                     ))}
                  </motion.nav>
               )}
            </AnimatePresence>
         </section>
      </>
   );
}
