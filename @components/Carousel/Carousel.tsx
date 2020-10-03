import { css } from 'linaria';
import React, { useEffect, useState } from 'react';
import THEME from 'Theme/theme';
import { Icon } from '@components/Icon/Icon';
import { AnimatePresence, motion, useAnimation, Variants } from 'framer-motion';
import { NameIconType } from '@components/Icon/icons';
import Link from 'next/link';

const section = css`
   grid-area: 1 / 1 /-1/-1;

   height: 100%;
   width: 100%;

   display: grid;
   grid-template: repeat(3, 1fr) / 1fr 5% 5% 1fr;
   place-items: center;
`;

const carousel = css`
   grid-row: 1 / -1;
   position: relative;

   &[data-area='one'] {
      grid-column: 1 / 3;
   }

   &[data-area='two'] {
      grid-column: 3 / -1;
   }

   overflow: hidden;
   height: 20vw;
   width: 20vw;
   display: grid;
   place-items: center;

   border-radius: 50%;
   box-shadow: inset 0px 0px 35px black;
`;

const circle = css`
   grid-row: 1 / -1;
   grid-column: 1 / 3;

   border-radius: 50%;
   filter: drop-shadow(0px 0px 5px black);

   &[data-circle='one'] {
      grid-column: 1 / 3;

      height: 25vw;
      width: 25vw;
      border: 2vw solid ${THEME.COLORS['primary-500']};
   }

   &[data-circle='two'] {
      grid-column: 1 / 3;

      height: 28vw;
      width: 28vw;
      border: 2vw solid ${THEME.COLORS['primary-600']};
   }

   &[data-circle='four'] {
      grid-column: 3 / -1;

      height: 25vw;
      width: 25vw;
      border: 2vw solid ${THEME.COLORS['primary-500']};
   }

   &[data-circle='five'] {
      grid-column: 3 / -1;

      height: 28vw;
      width: 28vw;
      border: 2vw solid ${THEME.COLORS['primary-600']};
   }
`;

const rope = css`
   height: 100vh;
   width: 1%;

   display: grid;
   grid-template: repeat(7, 1fr) / 1fr;
   place-content: center;

   background: ${THEME.COLORS.background};
   box-shadow: ${THEME.SHADOWS['--box-thin']} black;

   & > span:nth-child(5) {
      display: none;
   }
`;

const dot = css`
   height: 3vh;
   width: 3vh;
   place-self: center;

   background: ${THEME.COLORS.background};
   box-shadow: ${THEME.SHADOWS['--box-thin']} black;
   border-radius: 100%;
`;

const anchor = css`
   position: absolute;
   color: ${THEME.COLORS['secondary-400']};
   font-family: ${THEME.FONTS.amstelvar};
   text-transform: uppercase;
   white-space: nowrap;
`;

const pagination = css`
   grid-area: 2 / 2 / 3 / 4;
   font-family: ${THEME.FONTS.amstelvar};
`;

const description = css`
   z-index: 2;
   grid-area: 4/ 1 / -1 / 3;
   color: ${THEME.COLORS['secondary-400']};
   font-family: ${THEME.FONTS.amstelvar};

   display: none;
`;

const icon = css`
   color: ${THEME.COLORS['secondary-400']};
   width: 6vw;
   grid-area: 1 / 1 / -1 / -1;
   filter: drop-shadow(0 0 5px black);
`;

const button = css`
   z-index: 2;
   grid-column: 2/4;
   place-self: center;

   &[data-area='up'] {
      grid-row: 1 / 3;
   }

   &[data-area='down'] {
      grid-row: 2/4;
   }
`;

const chevron = css`
   color: ${THEME.COLORS['secondary-400']};
   filter: drop-shadow(0 0 5px black);
   width: 5vw;
`;

const descriptionVariants: Variants = {
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
      },
   },
};

const anchorVariants: Variants = {
   initial: (reverse: boolean) => ({
      y: reverse ? 300 : -300,
      transition: {
         duration: 0.8,
         ease: 'easeInOut',
      },
   }),
   out: (reverse: boolean) => ({
      y: reverse ? -300 : 300,
      transition: {
         duration: 1.1,
         ease: 'easeInOut',
      },
   }),
   in: {
      y: 0,
      transition: {
         duration: 1.1,
         ease: 'easeInOut',
      },
   },
};

const yRope = `-${29.5}vh`;
const ropeVariants: Variants = {
   initial: {
      y: yRope,
   },
   start: (reverse: boolean) => ({
      y: reverse
         ? [yRope, '-50vh', '0vh', yRope]
         : [yRope, '0vh', '-50vh', yRope],
      transition: {
         duration: 2,
         ease: 'easeInOut',
      },
   }),
};

type Data = {
   name: string;
   icon: NameIconType;
   description: string;
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
      <section className={section}>
         <button
            onClick={handlePreviousClick}
            className={button}
            data-area="up"
         >
            <Icon name="chevron" classname={chevron} />
         </button>

         <button onClick={handleNextClick} className={button} data-area="down">
            <Icon name="chevron" rotation="180deg" classname={chevron} />
         </button>

         {/* <article className={description}>
            <AnimatePresence exitBeforeEnter>
               <motion.p
                  key={datas[index].name}
                  variants={descriptionVariants}
                  animate="in"
                  exit="out"
                  initial="out"
               >
                  {datas[index].description}
               </motion.p>
            </AnimatePresence>
         </article> */}

         <div className={circle} data-circle="one"></div>
         <div className={circle} data-circle="two"></div>
         <div className={circle} data-circle="four"></div>
         <div className={circle} data-circle="five"></div>

         <div className={pagination}>
            <span>
               {index + 1} / {datas.length}
            </span>
         </div>

         <section className={carousel} data-area="one">
            <motion.div
               className={rope}
               animate={controls}
               variants={ropeVariants}
               custom={true}
               initial="initial"
               data-rope="up"
            >
               {Array.from({ length: 7 }).map((_, i) => (
                  <span key={i} className={dot}></span>
               ))}
            </motion.div>

            <AnimatePresence exitBeforeEnter>
               <Link href="/" key={datas[index].name}>
                  <motion.a
                     className={anchor}
                     variants={anchorVariants}
                     custom={true}
                     animate="in"
                     exit="out"
                     initial="initial"
                  >
                     <Icon name={datas[index].icon} classname={icon} />
                  </motion.a>
               </Link>
            </AnimatePresence>
         </section>

         <section className={carousel} data-area="two">
            <motion.div
               className={rope}
               animate={controls}
               variants={ropeVariants}
               custom={false}
               initial="initial"
               data-rope="down"
            >
               {Array.from({ length: 7 }).map((_, i) => (
                  <span key={i} className={dot}></span>
               ))}
            </motion.div>

            <AnimatePresence exitBeforeEnter>
               <Link href="/" key={datas[index].name}>
                  <motion.a
                     variants={anchorVariants}
                     className={anchor}
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
