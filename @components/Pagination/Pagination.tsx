import React from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Pathnames, Utils } from 'utils/utils';
import { Icon } from '@components/Icon/Icon';
import { COLORS } from 'Theme/colors';

import * as styles from './Pagination.styles';
import * as variants from './Pagination.variants';

const links = ['/', '/home', '/about', '/works', '/contact'];
const CHEVRON_SIZE = '1.5em';

function setIsPreviousVisible(pathname: string) {
   if (pathname === '/home' || pathname === '/') return false;
   else return true;
}

function setIsNextVisible(pathname: string) {
   if (pathname === '/contact' || pathname === '/') return false;
   else return true;
}

export function Pagination() {
   const router = useRouter();
   const pathname = router.pathname;
   const customPathname = Utils.customURL(pathname as Pathnames);
   const urlPagination = Utils.customURLPagination(pathname);

   function goToPreviousPage() {
      const previous = links[links.indexOf(urlPagination) - 1];
      router.push(previous);
   }

   function goToNextPage() {
      const next = links[links.indexOf(urlPagination) + 1];
      router.push(next);
   }

   const isPreviousVisible = setIsPreviousVisible(pathname);
   const isNextVisible = setIsNextVisible(pathname);

   return (
      <nav className={styles.nav}>
         {/* Previous Button */}
         {isPreviousVisible && (
            <motion.button
               className={styles.button}
               data-area="prev"
               onClick={goToPreviousPage}
               variants={variants.chevron}
               animate="animate"
               initial="initial"
               exit="exit"
            >
               <Icon
                  name="chevron"
                  iconColor={`${COLORS['black-100']}`}
                  hover={`${COLORS['black-100']}`}
                  size={CHEVRON_SIZE}
               />
            </motion.button>
         )}

         {/* Next Button */}
         {isNextVisible && (
            <motion.button
               className={styles.button}
               data-area="next"
               onClick={goToNextPage}
               variants={variants.chevron}
               animate="animate"
               initial="initial"
               exit="exit"
            >
               <Icon
                  name="chevron"
                  iconColor={`${COLORS['black-100']}`}
                  hover={`${COLORS['black-100']}`}
                  size={CHEVRON_SIZE}
                  rotation={'180deg'}
               />
            </motion.button>
         )}

         <span className={styles.span}>
            <AnimatePresence exitBeforeEnter>
               <motion.h2
                  key={pathname}
                  variants={variants.title}
                  animate="animate"
                  initial="initial"
                  exit="exit"
               >
                  {customPathname}
               </motion.h2>
            </AnimatePresence>
         </span>
      </nav>
   );
}
