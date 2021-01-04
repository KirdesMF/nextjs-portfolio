import { Variants } from 'framer-motion';

export const anchor: Variants = {
   in: {
      opacity: 1,
      transition: {
         duration: 0.5,
         ease: 'circIn',
      },
   },
   out: {
      opacity: 0,
      transition: {
         duration: 0.5,
         ease: 'circIn',
      },
   },
};
