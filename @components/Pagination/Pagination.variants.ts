import { Variants } from 'framer-motion';

const ROTATION_TITLE = '25deg';

export const title: Variants = {
   initial: {
      transform: `rotate(${ROTATION_TITLE})`,
   },
   animate: {
      transform: 'rotate(0deg)',
      transition: {
         duration: 0.5,
      },
   },
   exit: {
      transform: `rotate(-${ROTATION_TITLE})`,
      transition: {
         duration: 0.5,
      },
   },
};

export const chevron: Variants = {
   initial: {
      opacity: 0,
   },
   animate: {
      opacity: 1,
   },
   exit: {
      opacity: 0,
   },
};
