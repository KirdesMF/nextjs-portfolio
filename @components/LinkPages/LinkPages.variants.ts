import { Variants } from 'framer-motion';

export const button: Variants = {
   in: {
      x: 0,
      opacity: 1,
      transition: {
         duration: 1,
         ease: 'circOut',
      },
   },
   out: {
      x: 50,
      opacity: 0,
      transition: {
         duration: 1,
         ease: 'circIn',
      },
   },
};
