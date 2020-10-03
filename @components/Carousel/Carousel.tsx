import React, { useState } from 'react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { NameIconType } from '@components/Icon/icons';
import { Icon } from '@components/Icon/Icon';

import * as styles from './Carousel.styles';
import * as variants from './Carousel.variants';

type Data = {
   name: string;
   icon: NameIconType;
   description: string;
   id: number;
};

type CarouselProps = {
   datas: Data[];
};

export default function Carousel({ datas }: CarouselProps) {
   const [index, setIndex] = useState(0);
   const controls = useAnimation();

   const handleNextClick = () => {
      setIndex((index) => (index + 1) % datas.length);
      controls.start('start');
   };

   const handlePreviousClick = () => {
      setIndex((index) => (index === 0 ? datas.length - 1 : index - 1));
      controls.start('start');
   };

   return (
      <section className={styles.section}>
         <div className={styles.circle} data-circle="one"></div>
         <div className={styles.circle} data-circle="two"></div>
         <div className={styles.circle} data-circle="four"></div>
         <div className={styles.circle} data-circle="five"></div>

         <button
            onClick={handlePreviousClick}
            className={styles.button}
            data-area="up"
         >
            <Icon name="chevron" classname={styles.chevron} />
         </button>

         <button
            onClick={handleNextClick}
            className={styles.button}
            data-area="down"
         >
            <Icon name="chevron" rotation="180deg" classname={styles.chevron} />
         </button>

         <section className={styles.carousel} data-area="one">
            <motion.div
               className={styles.rope}
               animate={controls}
               variants={variants.rope}
               custom={true}
               initial="initial"
               data-rope="up"
            >
               {Array.from({ length: 7 }).map((_, i) => (
                  <span key={i} className={styles.dot}></span>
               ))}
            </motion.div>

            <AnimatePresence exitBeforeEnter>
               <Link href="/" key={datas[index].name}>
                  <motion.a
                     className={styles.anchor}
                     variants={variants.anchor}
                     custom={true}
                     animate="in"
                     exit="out"
                     initial="initial"
                  >
                     <Icon name={datas[index].icon} classname={styles.icon} />
                  </motion.a>
               </Link>
            </AnimatePresence>
         </section>

         <section className={styles.carousel} data-area="two">
            <motion.div
               className={styles.rope}
               animate={controls}
               variants={variants.rope}
               custom={false}
               initial="initial"
               data-rope="down"
            >
               {Array.from({ length: 7 }).map((_, i) => (
                  <span key={i} className={styles.dot}></span>
               ))}
            </motion.div>

            <AnimatePresence exitBeforeEnter>
               <Link href="/" key={datas[index].name}>
                  <motion.a
                     variants={variants.anchor}
                     className={styles.anchor}
                     custom={false}
                     animate="in"
                     exit="out"
                     initial="initial"
                  >
                     {datas[index].name}
                  </motion.a>
               </Link>
            </AnimatePresence>
         </section>
      </section>
   );
}
