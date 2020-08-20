import React, { useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import usePathName from 'hooks/usePathName';

const variants: Variants = {
   initial: {
      y: 20,
      opacity: 0,
   },
   out: {
      opacity: 0,
      y: 20,
      filter: ['blur(5px)', 'blur(5px)'],
      transition: {
         duration: 1,
      },
   },
   in: {
      y: 0,
      opacity: 1,
      filter: ['blur(5px)', 'blur(0px)'],
      transition: {
         duration: 1,
      },
   },
};

function SvgTitle({ pathname }: { pathname: string }) {
   const { pathToTitle } = usePathName();
   return (
      <div
         style={{
            position: 'fixed',
            height: '100%',
            width: '100%',
            zIndex: 3,
            display: 'grid',
            placeItems: 'center',
         }}
      >
         <motion.h1
            style={{
               fontFamily: 'Decovar',
               fontSize: '4em',
               color: 'white',
               willChange: 'filter',
            }}
            key="title"
            variants={variants}
            initial="initial"
            animate="in"
            exit="out"
         >
            {pathToTitle(pathname)}
         </motion.h1>
      </div>
   );
}

export default SvgTitle;
