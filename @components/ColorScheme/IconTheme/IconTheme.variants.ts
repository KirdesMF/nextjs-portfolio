import { Variants } from 'framer-motion';

export const iconVariants: Variants = {
   dark: {
      rotate: 45,
      transition: {
         ease: 'backInOut',
         duration: 1,
      },
   },
   light: {
      rotate: -135,
      transition: {
         ease: 'backInOut',
         duration: 1,
      },
   },
   initial: {
      rotate: -135,
   },
};

export const lightVariants: Variants = {
   dark: {
      opacity: 0.05,
      transition: {
         ease: 'backInOut',
         duration: 1,
      },
   },
   light: {
      opacity: 1,
      transition: {
         ease: 'backInOut',
         duration: 1,
      },
   },
   initial: {
      opacity: 0,
   },
};

export const darkVariants: Variants = {
   dark: {
      opacity: 1,
      transition: {
         ease: 'backInOut',
         duration: 1,
      },
   },
   light: {
      opacity: 0.05,
      transition: {
         ease: 'backInOut',
         duration: 1,
      },
   },
   initial: {
      opacity: 0,
   },
};
