import { Variants } from 'framer-motion';

export const anchor: Variants = {
   initial: {
      y: -150,
      opacity: 0,
      transition: {
         duration: 0.8,
         ease: 'easeInOut',
      },
   },
   in: {
      y: 0,
      opacity: 1,
      transition: {
         duration: 1,
         ease: 'easeInOut',
      },
   },
   out: {
      y: 150,
      opacity: 0,
      transition: {
         duration: 0.5,
         ease: 'circOut',
      },
   },
};

export const text: Variants = {
   initial: {
      opacity: 1,
      transition: {
         duration: 0.5,
      },
   },
   in: {
      opacity: 1,
      transition: {
         duration: 0.5,
      },
   },
   out: {
      opacity: 0,
      transition: {
         duration: 0.5,
         delay: 0.1,
      },
   },
};

export const hexes: Variants = {
   prev: (i: number) => ({
      rotate: !(i & 1) ? 0 : -30,
      scale: 1.1,
      transition: {
         duration: 0.2,
         ease: 'easeInOut',
         delay: i * 0.1,
         yoyo: true,
      },
   }),
   next: (i: number) => ({
      rotate: !(i & 1) ? 30 : 0,
      scale: 0.95,

      transition: {
         duration: 0.2,
         ease: 'easeInOut',
         delay: i * 0.1,
         yoyo: true,
      },
   }),

   initial: (i: number) => ({
      rotate: !(i & 1) ? 15 : -15,
      scale: 1,
      transition: {
         duration: 0.5,
         ease: 'easeInOut',
      },
   }),
};

export const line: Variants = {
   prev: (i: number) => ({
      strokeDashoffset: [-300, 0, -300],
      transition: {
         duration: 1,
         ease: 'easeInOut',
         delay: i * 0.1,
      },
   }),
   next: (i: number) => ({
      strokeDashoffset: [300, 0, 300],

      transition: {
         duration: 1,
         ease: 'easeInOut',
         delay: i * 0.1,
      },
   }),

   initial: {
      strokeDashoffset: 300,

      transition: {
         duration: 1,
         ease: 'easeInOut',
      },
   },
};

export const lineDescription: Variants = {
   initial: {
      strokeDashoffset: 200,
   },

   prev: (mid: boolean) => ({
      strokeDashoffset: mid ? [200, -200, 200] : [-200, 200, -200],
      transition: {
         duration: 2,
         ease: 'easeInOut',
      },
   }),
   next: (mid: boolean) => ({
      strokeDashoffset: mid ? [-200, 200, -200] : [200, -200, 200],
      transition: {
         duration: 2,
         ease: 'easeInOut',
      },
   }),
};
