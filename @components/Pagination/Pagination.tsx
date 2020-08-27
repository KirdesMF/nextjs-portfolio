import React from 'react';
import { SPagination } from './Pagination.styled';
import usePathName from 'hooks/usePathName';
import { useRouter, NextRouter } from 'next/router';
import { Icon } from '@components/Icon/Icon';
import { Variants, motion } from 'framer-motion';

const links: URLType[] = ['/', '/home', '/about', '/works', '/contact'];
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

const setIsPreviousVisible = (pathname: URLType) => {
   if (pathname === '/home' || pathname === '/') return false;
   else return true;
};

const setIsNextVisible = (pathname: URLType) => {
   if (pathname === '/contact' || pathname === '/') return false;
   else return true;
};

type TPagination = {
   router: NextRouter;
   pathname: URLType;
};
function Pagination({ router, pathname }: TPagination) {
   const { pathToTitle } = usePathName();

   const goToPreviousPage = () => {
      const previous = links[links.indexOf(pathname) - 1];
      router.push(previous);
   };

   const goToNextPage = () => {
      const next = links[links.indexOf(pathname) + 1];
      router.push(next);
   };

   const isPreviousVisible = setIsPreviousVisible(pathname);
   const isNextVisible = setIsNextVisible(pathname);

   return (
      <SPagination.Navigation>
         {/* Previous Button */}
         {isPreviousVisible && (
            <SPagination.Button
               as={motion.button}
               prev
               onClick={goToPreviousPage}
               variants={chevronVariants}
               animate="animate"
               initial="initial"
               exit="exit"
            >
               <Icon
                  name="chevron"
                  iconColor="white"
                  hover="black"
                  size={CHEVRON_SIZE}
               />
            </SPagination.Button>
         )}

         {/* Next Button */}
         {isNextVisible && (
            <SPagination.Button
               as={motion.button}
               onClick={goToNextPage}
               variants={chevronVariants}
               animate="animate"
               initial="initial"
               exit="exit"
            >
               <Icon
                  name="chevron"
                  iconColor="white"
                  hover="black"
                  size={CHEVRON_SIZE}
                  rotation={'180deg'}
               />
            </SPagination.Button>
         )}

         <SPagination.Title>
            <motion.h2
               variants={titleVariants}
               animate="animate"
               initial="initial"
               exit="exit"
            >
               {pathToTitle(pathname)}
            </motion.h2>
         </SPagination.Title>
      </SPagination.Navigation>
   );
}

export default Pagination;
