import { Variants } from 'framer-motion';

function setTransformX(i: number) {
   if (i === 1) return i * 0;
   else if (i === 2) return i * -100;
   else return -i * 100;
}

function setTranformY(i: number) {
   if (i === 1) return i * -200;
   else if (i === 2) return i * -50;
   else return i * 50;
}

const anchor: Variants = {
   in: (i: number) => ({
      y: setTranformY(i),
      x: setTransformX(i),
      opacity: 1,
      scale: [1, 1.1, 1],
      transition: {
         delay: i * 0.1,
         duration: 0.3,
         ease: 'backInOut',
      },
   }),

   out: (i: number) => ({
      y: 0,
      x: 0,
      opacity: 0,
      transition: {
         delay: i * 0.1,
         duration: 0.3,
         ease: 'backOut',
      },
   }),
};

const button: Variants = {
   out: {
      opacity: 0,
   },
   in: {
      opacity: 1,
   },
};

export default {
   anchor,
   button,
};
