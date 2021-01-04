import { Variants } from 'framer-motion';

export const variants: Variants = {
   in: {
      opacity: 1,
      y: 0,
      transition: {
         duration: 1,
         ease: 'linear',
      },
   },
   out: {
      opacity: 0,
      y: 50,
      transition: {
         duration: 1,
         ease: 'linear',
      },
   },
   hover: {
      y: [0, -10],
      transition: {
         duration: 1,
         ease: 'linear',
         yoyo: Infinity,
      },
   },
};
