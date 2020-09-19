import { Variants } from 'framer-motion';

const nav: Variants = {
   initial: {
      opacity: 0,
   },
   out: {
      opacity: 0,
      transition: {
         staggerChildren: 0.2,
         when: 'afterChildren',
      },
   },
   in: {
      opacity: 1,
      transition: {
         delayChildren: 0.8,
         staggerChildren: 0.2,
      },
   },
};

const anchor: Variants = {
   in: (i: number) => ({
      y: 0,
      opacity: 1,
      scale: [1, 1.1, 1],
      transition: {
         delay: i * 0.1,
         duration: 0.3,
         ease: 'backInOut',
      },
   }),

   out: (i: number) => ({
      y: 20,
      opacity: 0,
      transition: {
         delay: i * 0.1,
         duration: 0.3,
      },
   }),
};

const button: Variants = {
   initial: {
      opacity: 0,
   },
   out: {
      opacity: 0,
   },
   in: {
      opacity: 1,
      transition: {
         delay: 1,
      },
   },
};

export default {
   nav,
   anchor,
   button,
};
