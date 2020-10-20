import { useState } from 'react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { Icon } from '@components/Icon/Icon';

import * as styles from './Carousel.styles';
import * as variants from './Carousel.variants';
import { NameIconType } from '@components/Icon/icons';
import Hexagon from '@components/Hexagon/Hexagon';
import { TCube, TPoint } from 'utils/hexagons/convert';

const WIDTH = 500;
const HEIGHT = 500;
const VIEWBOX = `0 0 ${WIDTH} ${HEIGHT}`;

const origin: TPoint = { x: WIDTH / 2, y: HEIGHT / 2 };
const cube: TCube = { q: 0, r: 0, s: 0 };
const HEXES_SIZE = [175, 200, 210] as const;
const LINES = [150, 200, 250, 300, 350] as const;

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
      controls.start('next');
   };

   const handlePreviousClick = () => {
      setIndex((index) => (index === 0 ? datas.length - 1 : index - 1));
      controls.start('prev');
   };

   return (
      <div className={styles.container}>
         <button onClick={handlePreviousClick} className={styles.button}>
            <Icon name="chevron" classname={styles.chevron} />
         </button>

         <button onClick={handleNextClick} className={styles.button}>
            <Icon name="chevron" rotation="180deg" classname={styles.chevron} />
         </button>

         <section className={styles.carousel}>
            <svg
               version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               focusable="false"
               viewBox={VIEWBOX}
               className={styles.svgCarousel}
            >
               <AnimatePresence exitBeforeEnter>
                  <Link href="/" key={datas[index].id}>
                     <motion.a
                        className={styles.anchorSvg}
                        variants={variants.text}
                        exit="out"
                        animate="in"
                        initial="initial"
                     >
                        <text
                           x="50%"
                           y="50%"
                           textAnchor="middle"
                           alignmentBaseline="middle"
                        >
                           {datas[index].name}
                        </text>
                     </motion.a>
                  </Link>
               </AnimatePresence>

               {LINES.map((line, i) => (
                  <motion.line
                     key={line}
                     x1={line}
                     x2={line}
                     y1="100"
                     y2="400"
                     strokeWidth={100}
                     variants={variants.line}
                     animate={controls}
                     initial="initial"
                     custom={i}
                  />
               ))}

               {HEXES_SIZE.map((hexes, i) => (
                  <Hexagon
                     key={hexes}
                     filter="url(#shadow)"
                     className={styles.hexes}
                     originHex={origin}
                     cube={cube}
                     sizeHex={hexes}
                     variants={variants.hexes}
                     animate={controls}
                     initial="initial"
                     custom={i}
                  />
               ))}
            </svg>
         </section>

         <article className={styles.card}>
            <section>
               <svg
                  className={styles.svgCard}
                  viewBox="0 0 200 200"
                  preserveAspectRatio="none"
               >
                  <motion.line
                     variants={variants.lineDescription}
                     animate={controls}
                     initial="initial"
                     x1={0}
                     y1={100}
                     x2={200}
                     y2={100}
                  />
               </svg>
            </section>

            <section>
               <svg
                  className={styles.svgCard}
                  viewBox="0 0 200 200"
                  preserveAspectRatio="none"
               >
                  <motion.line
                     variants={variants.lineDescription}
                     animate={controls}
                     custom={true}
                     initial="initial"
                     x1={0}
                     y1={100}
                     x2={200}
                     y2={100}
                  />
               </svg>
            </section>

            <section>
               <svg
                  className={styles.svgCard}
                  viewBox="0 0 200 200"
                  preserveAspectRatio="none"
               >
                  <motion.line
                     variants={variants.lineDescription}
                     animate={controls}
                     initial="initial"
                     x1={0}
                     y1={100}
                     x2={200}
                     y2={100}
                  />
               </svg>
            </section>
         </article>
      </div>
   );
}
