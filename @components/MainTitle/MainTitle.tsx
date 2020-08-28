import React, { useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import usePathName from 'hooks/usePathName';
import { SMaintTitle } from './MainTitle.styled';

const variants: Variants = {
   initial: {
      y: 20,
      opacity: 0,
   },
   out: {
      opacity: 0,
      y: 20,
      transition: {
         duration: 1,
         delay: 0.5,
      },
   },
   in: {
      y: 0,
      opacity: 1,
      transition: {
         duration: 1,
      },
   },
};

type TMaintTitle = {
   pathname: string;
};

function MaintTitle({ pathname }: TMaintTitle) {
   return (
      <SMaintTitle.Title>
         <motion.h1
            variants={variants}
            initial="initial"
            animate="in"
            exit="out"
         >
            {pathname}
         </motion.h1>
      </SMaintTitle.Title>
   );
}

export default MaintTitle;
