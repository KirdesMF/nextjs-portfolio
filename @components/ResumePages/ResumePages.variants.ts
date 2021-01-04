import { Variants } from 'framer-motion';

export const article: Variants = {
   in: {
      transition: {
         staggerChildren: 0.1,
         delayChildren: 0.8,
      },
   },
   out: {
      transition: {
         staggerChildren: 0.1,
      },
   },
};

export const span: Variants = {
   in: {
      rotate: 0,
      opacity: 1,
      transition: {
         duration: 1,
         ease: 'circOut',
      },
   },
   out: {
      rotate: 5,
      opacity: 0,
      transition: {
         duration: 1,
         ease: 'circIn',
      },
   },
};
