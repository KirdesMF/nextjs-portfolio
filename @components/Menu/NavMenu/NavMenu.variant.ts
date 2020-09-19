import { Variants } from 'framer-motion';

const nav: Variants = {
   initial: {
      y: '-100%',
      x: '0%',
      opacity: 0,

      transition: {
         ease: 'easeInOut',
         duration: 0.5,
      },
   },
   in: (i: number) => ({
      y: '0%',
      x: '0%',
      opacity: 1,

      transition: {
         delay: i * 0.2,
         duration: 0.3,
         ease: 'circOut',
      },
   }),

   out: (i: number) => ({
      x: '100%',
      y: '0%',
      opacity: 0,
      transition: {
         delay: i * 0.2,
         duration: 0.3,
         ease: 'circIn',
      },
   }),
};

export default { nav };
