import React, { useState, useEffect } from 'react';
import { SPagination } from './Pagination.styled';
import { motion } from 'framer-motion';
import usePathName from 'hooks/usePathName';
import { useRouter } from 'next/router';

//TODO animate pagination
const links: URLType[] = ['/', '/home', '/about', '/works', '/contact'];

function Pagination() {
   const { pathToTitle } = usePathName();
   const router = useRouter();
   const pathname = router.pathname as URLType;

   const [isButtonVisible, setIsButtonVisible] = useState({
      previous: false,
      next: false,
   });

   useEffect(() => {
      if (pathname === '/') {
         setIsButtonVisible({
            previous: false,
            next: false,
         });
      } else if (pathname === '/home') {
         setIsButtonVisible({
            previous: false,
            next: true,
         });
      } else if (pathname === '/contact') {
         setIsButtonVisible({
            previous: true,
            next: false,
         });
      } else {
         setIsButtonVisible({
            previous: true,
            next: true,
         });
      }
   }, [pathname]);

   const goToPreviousPage = () => {
      let previous = links[links.indexOf(pathname) - 1];
      router.push(previous);
   };

   const goToNextPage = () => {
      let next = links[links.indexOf(pathname) + 1];
      router.push(next);
   };

   return (
      <SPagination.Navigation>
         {isButtonVisible.previous && (
            <button onClick={goToPreviousPage}>Prev</button>
         )}
         <motion.h2>{pathToTitle(pathname)}</motion.h2>
         {isButtonVisible.next && <button onClick={goToNextPage}>Next</button>}
      </SPagination.Navigation>
   );
}

export default Pagination;
