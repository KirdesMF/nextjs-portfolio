import { Variants } from 'framer-motion';

const section: Variants = {
   in: {
      opacity: 1,
      transition: {
         when: 'beforeChildren',
         staggerChildren: 0,
      },
   },
   out: {
      opacity: 0,
      transition: {
         staggerDirection: -1,
         when: 'afterchildren',
      },
   },
};
const anchor: Variants = {
   in: (i: number) => ({
      y: '0%',
      opacity: 1,
      rotate: i % 2 ? 2 : -2,

      transition: {
         delay: i * 0.2,
         duration: 0.3,
         ease: 'circOut',
      },
   }),

   out: (i: number) => ({
      y: '-100%',
      opacity: 0,
      rotate: 0,

      transition: {
         delay: i * 0.2,
         duration: 0.3,
         ease: 'circIn',
      },
   }),
};

const overlay: Variants = {
   in: {
      opacity: 1,
      transition: {
         duration: 0.3,
         ease: 'easeIn',
      },
   },
   out: {
      opacity: 0,
      transition: {
         duration: 0.5,
         ease: 'easeOut',
      },
   },
};

const span: Variants = {
   in: (i: number) => ({
      y: '0%',
      transition: {
         delay: i * 0.2,
         duration: 0.5,
         ease: 'circOut',
      },
   }),

   out: (i: number) => ({
      y: '100%',

      transition: {
         delay: i * 0.2,
         duration: 0.5,
         ease: 'circIn',
      },
   }),
};
export default { anchor, overlay, section, span };
