import { Variants } from 'framer-motion';

export const title: Variants = {
   initial: {
      y: 200,
   },
   out: (i) => ({
      y: 200,
      transition: {
         duration: 0.8,
         delay: i * 0.1,
         ease: 'circIn',
      },
   }),
   in: (i) => ({
      y: 0,
      transition: {
         duration: 0.8,
         delay: i * 0.1,
         ease: 'circOut',
      },
   }),
};
