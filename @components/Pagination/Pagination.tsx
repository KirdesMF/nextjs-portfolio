import React from 'react';
import { useRouter } from 'next/router';
import { Icon } from '@components/Icon/Icon';
import { Variants, motion, AnimatePresence } from 'framer-motion';
import { Utils } from 'utils/utils';
import { css } from 'linaria';
import theme from 'Theme/theme';

const links = ['/', '/home', '/about', '/works', '/contact'];
const CHEVRON_SIZE = '1.5vw';
const ROTATION_TITLE = '25deg';

const titleVariants: Variants = {
   initial: {
      transform: `rotate(${ROTATION_TITLE})`,
   },
   animate: {
      transform: 'rotate(0deg)',
      transition: {
         duration: 0.5,
         delay: 1,
      },
   },
   exit: {
      transform: `rotate(-${ROTATION_TITLE})`,
      transition: {
         duration: 0.5,
         delay: 1,
      },
   },
};

const chevronVariants: Variants = {
   initial: {
      opacity: 0,
   },
   animate: {
      opacity: 1,
   },
   exit: {
      opacity: 0,
   },
};

function setIsPreviousVisible(pathname: string) {
   if (pathname === '/home' || pathname === '/') return false;
   else return true;
}

function setIsNextVisible(pathname: string) {
   if (pathname === '/contact' || pathname === '/') return false;
   else return true;
}

function Pagination() {
   const router = useRouter();
   const pathname = router.pathname;
   const customPathname = Utils.customURL(pathname);

   function goToPreviousPage() {
      const previous = links[links.indexOf(pathname) - 1];
      router.push(previous);
   }

   function goToNextPage() {
      const next = links[links.indexOf(pathname) + 1];
      router.push(next);
   }

   const isPreviousVisible = setIsPreviousVisible(pathname);
   const isNextVisible = setIsNextVisible(pathname);

   return (
      <nav className={nav}>
         {/* Previous Button */}
         {isPreviousVisible && (
            <motion.button
               className={button}
               data-area="prev"
               onClick={goToPreviousPage}
               variants={chevronVariants}
               animate="animate"
               initial="initial"
               exit="exit"
            >
               <Icon
                  name="chevron"
                  iconColor={`${theme.COLORS['grey-200']}`}
                  hover={`${theme.COLORS['grey-100']}`}
                  size={CHEVRON_SIZE}
               />
            </motion.button>
         )}

         {/* Next Button */}
         {isNextVisible && (
            <motion.button
               className={button}
               data-area="next"
               onClick={goToNextPage}
               variants={chevronVariants}
               animate="animate"
               initial="initial"
               exit="exit"
            >
               <Icon
                  name="chevron"
                  iconColor={`${theme.COLORS['grey-200']}`}
                  hover={`${theme.COLORS['grey-100']}`}
                  size={CHEVRON_SIZE}
                  rotation={'180deg'}
               />
            </motion.button>
         )}

         <span className={span}>
            <AnimatePresence exitBeforeEnter>
               <motion.h2
                  key={router.route}
                  variants={titleVariants}
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

export default Pagination;

const nav = css`
   position: fixed;
   z-index: 4;
   right: 3%;
   top: 50%;
   transform: translateY(-50%);

   height: 20%;
   width: 8%;

   display: grid;
   grid-template-areas:
      'prev'
      'title'
      'next';
   grid-template-rows: repeat(3, 1fr);
`;

const button = css`
   &[data-area='prev'] {
      grid-area: prev;
   }

   &[data-area='next'] {
      grid-area: next;
   }
`;

const span = css`
   grid-area: title;
   place-self: center;
   overflow: hidden;
   padding: 0.5rem;
   width: 100%;
   text-align: center;
   border-top: 1px solid ${theme.COLORS['primary-200']};
   border-bottom: 1px solid ${theme.COLORS['primary-200']};

   > h2 {
      color: ${theme.COLORS['primary-200']};
      text-transform: uppercase;
      font-family: 'Amstelvar';
      font-size: 1.3rem;
      transform-origin: 200%;
   }
`;
