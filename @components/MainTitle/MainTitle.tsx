import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import usePathName from 'hooks/usePathName';
import { SMaintTitle } from './MainTitle.styled';
import { Variants } from 'framer-motion';
import { useRouter } from 'next/router';

const variants: Variants = {
   initial: {
      y: 150,
   },
   out: (i) => ({
      y: 150,
      transition: {
         duration: 0.9,
         delay: i * 0.05,
         ease: 'circIn',
      },
   }),
   in: (i) => ({
      y: 0,
      transition: {
         duration: 1,
         delay: i * 0.1,
         ease: 'circOut',
      },
   }),
};

type TMaintTitle = {
   pathname: string;
};

function MaintTitle({ pathname }: TMaintTitle) {
   return (
      <SMaintTitle.Title>
         {pathname.split('').map((letter, i) => (
            <SMaintTitle.Span
               key={i}
               custom={i}
               variants={variants}
               initial="initial"
               animate="in"
               exit="out"
            >
               {letter}
            </SMaintTitle.Span>
         ))}
      </SMaintTitle.Title>
   );
}

export default MaintTitle;
