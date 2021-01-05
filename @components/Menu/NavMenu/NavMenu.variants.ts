import { Variants } from 'framer-motion';

const section: Variants = {
   in: {
      opacity: 1,
      transition: {
         when: 'beforeChildren',
         staggerChildren: 0.5,
      },
   },
   out: {
      opacity: 0,
      transition: {
         when: 'afterchildren',
         staggerChildren: 0.5,
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

const span: Variants = {
   initial: {
      y: '-100%',
      transition: {
         duration: 0.5,
         ease: 'circOut',
      },
   },
   in: (i: number) => ({
      y: '0%',
      transition: {
         delay: i * 0.5,
         duration: 0.3,
         ease: 'circOut',
      },
   }),

   out: (i: number) => ({
      y: '100%',

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

export default { anchor, overlay, section, span };
