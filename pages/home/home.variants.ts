import { Variants } from 'framer-motion';

const text: Variants = {
   in: {
      y: 0,
      transition: {
         duration: 0.5,
         ease: 'linear',
         delay: 0.5,
      },
   },

   out: {
      y: 300,
      transition: {
         duration: 0.5,
      },
   },
};

const hr: Variants = {
   in: {
      scaleX: 1,
      transition: {
         duration: 1,
         ease: 'linear',
      },
   },

   out: {
      scaleX: 0,
      transition: {
         duration: 1,
         ease: 'linear',
         delay: 0.5,
      },
   },
};

const button: Variants = {
   in: {
      y: 0,
      transition: {
         duration: 1,
         ease: 'linear',
         delay: 0.2,
      },
   },

   out: {
      y: '-100%',
      transition: {
         duration: 1,
         ease: 'circOut',
      },
   },
};

const hex: Variants = {
   in: (i: number) => ({
      rotate: 720,
      scale: [0, 1.5, 1, 0.5, 1],
      transition: {
         duration: 0.8,
         delay: i * 0.08,
         ease: 'backOut',
         staggerDirection: -1,
      },
   }),
   out: (i: number) => ({
      rotate: -360,
      scale: 0,
      transition: {
         duration: 0.3,
         delay: i * 0,
      },
   }),
};

export default {
   button,
   hr,
   text,
   hex,
};
