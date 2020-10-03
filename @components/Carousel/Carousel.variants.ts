import { Variants } from 'framer-motion';

export const anchor: Variants = {
   initial: (reverse: boolean) => ({
      y: reverse ? 300 : -300,
      transition: {
         duration: 0.8,
         ease: 'easeInOut',
      },
   }),
   out: (reverse: boolean) => ({
      y: reverse ? -300 : 300,
      transition: {
         duration: 1.1,
         ease: 'easeInOut',
      },
   }),
   in: {
      y: 0,
      transition: {
         duration: 1.1,
         ease: 'easeInOut',
      },
   },
};

const yRope = `-${29.5}vh`;
export const rope: Variants = {
   initial: {
      y: yRope,
   },
   start: (reverse: boolean) => ({
      y: reverse
         ? [yRope, '-50vh', '0vh', yRope]
         : [yRope, '0vh', '-50vh', yRope],
      transition: {
         duration: 2,
         ease: 'easeInOut',
      },
   }),
};
