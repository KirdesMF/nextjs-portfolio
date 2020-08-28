import React, { useState, useContext, useEffect } from 'react';
import { SMenu } from './Menu.styled';
import { ThemeContext } from 'styled-components';
import { createHexMapShapeHexagons } from 'utils/hexagons/helpers';
import { Hexagon } from '@components/Hexagon/Hexagon.styled';

import useClientRect from 'hooks/useClientRect';
import usePathName from 'hooks/usePathName';
import { Variants, useAnimation, Variant, motion } from 'framer-motion';

type TMenuProps = {
   pathname: string;
};

function randomColor() {
   return `hsl(${~~(Math.random() * (360 - 1) + 1)}, 50%, 50%)`;
}

const transition = (i: number): Variant => ({
   transition: {
      delay: i * 0.05,
      ease: 'anticipate',
      duration: 1,
   },
});

const HEX_SIZE = 25;
const RADIUS = 1;
const LENGTH_PATH = 20;
const LENGTH_MID_PATH = 28;
const PADDING_PATH = 15;

const hexmap = createHexMapShapeHexagons(RADIUS);

export default function Menu({ pathname }: TMenuProps) {
   // Hooks
   const { colors } = useContext(ThemeContext);
   const [rect, ref] = useClientRect();
   const controls = useAnimation();

   // States
   const [isOpen, setIsOpen] = useState(false);
   const [colorAnimation, setColorAnimation] = useState({
      random: colors.black,
      color: colors.black,
   });

   // Const
   const viewBox = rect && `0 0 ${~~rect.width} ${~~rect.height}`;
   const origin = {
      x: rect && ~~(rect.width / 2),
      y: rect && ~~(rect.height / 2),
   };

   const path = {
      top: {
         xStart: origin.x - LENGTH_PATH,
         yStart: origin.y - PADDING_PATH,
         xEnd: origin.x + LENGTH_PATH,
         yEnd: origin.y - PADDING_PATH,
      },
      middle: {
         xStart: origin.x - LENGTH_MID_PATH,
         yStart: origin.y || 0,
         xEnd: origin.x + LENGTH_MID_PATH,
         yEnd: origin.y || 0,
      },
      bottom: {
         xStart: origin.x - LENGTH_PATH,
         yStart: origin.y + PADDING_PATH,
         xEnd: origin.x + LENGTH_PATH,
         yEnd: origin.y + PADDING_PATH,
      },
   };

   // Set state "before" render
   useEffect(() => {
      setColorAnimation({
         random: randomColor(),
         color: colors[pathname],
      });
   }, [pathname]);

   //TODO ANIMATION need refactoring
   const variants: Variants = {
      initial: {
         opacity: 0,
         rotateY: 0,

         fill: colorAnimation.random,
         stroke: colorAnimation.random,
      },

      // isOpen false
      hoverStartClose: (i) => ({
         opacity: 0.5,
         rotateY: -360,
         scale: [1, 1.2, 1],
         fill: colorAnimation.color,
         stroke: `hsl(1, 10%, 70%)`,
         ...transition(i),
      }),

      hoverEndClose: (i) => ({
         opacity: 0,
         rotateY: 0,

         fill: colorAnimation.random,
         stroke: colorAnimation.random,
         ...transition(i),
      }),

      //isOpen true
      hoverStartOpen: (i) => ({
         opacity: 0.2,
         rotateY: 360,
         scale: [1, 1.2, 1],
         fill: `hsl(1, 10%, 10%)`,
         stroke: colors.black,
         ...transition(i),
      }),

      hoverEndOpen: (i) => ({
         opacity: 0.3,
         fill: colorAnimation.random,
         stroke: colorAnimation.random,
         rotateY: -360,
         ...transition(i),
      }),
   };

   const topPathVariants: Variants = {
      initial: {
         d: `M ${path.top.xStart} ${path.top.yStart} L ${path.top.xEnd} ${path.top.yEnd}`,
         stroke: colors.white,
      },
      open: {
         d: `
         M ${path.top.xStart + 2} ${path.top.yStart - 2} 
         L ${path.bottom.xEnd - 2} ${path.bottom.yEnd + 2}`,

         transition: {
            ease: 'backInOut',
            duration: 0.5,
            delay: 0.5,
         },
      },
      closed: {
         d: `M ${path.top.xStart} ${path.top.yStart} L ${path.top.xEnd} ${path.top.yEnd}`,
         transition: {
            ease: 'backInOut',
            duration: 0.5,
         },
      },
   };

   const bottomPathVariants: Variants = {
      initial: {
         d: `M ${path.bottom.xStart} ${path.bottom.yStart} L ${path.bottom.xEnd} ${path.bottom.yEnd}`,
         stroke: colors.white,
      },
      open: {
         d: `
         M ${path.bottom.xStart + 2} ${path.bottom.yStart + 2} 
         L ${path.top.xEnd - 2} ${path.top.yEnd - 2}`,
         transition: {
            ease: 'backInOut',
            duration: 0.5,
            delay: 0.5,
         },
      },
      closed: {
         d: `M ${path.bottom.xStart} ${path.bottom.yStart} L ${path.bottom.xEnd} ${path.bottom.yEnd}`,
         transition: {
            ease: 'backInOut',
            duration: 0.5,
         },
      },
   };

   const middlePathVariants: Variants = {
      initial: {
         opacity: 1,
         x: 0,
         stroke: colors.white,
      },
      open: {
         opacity: 0,
         x: -20,
         transition: {
            ease: 'backInOut',
            duration: 1,
         },
      },
      closed: {
         opacity: 1,
         x: [20, 0],
         transition: {
            ease: 'backInOut',
            duration: 1,
            delay: 0.5,
         },
      },
   };

   const handleAnimation = {
      initial: 'initial',
      animate: controls,
      onTapStart: () => setIsOpen((prev) => !prev),
      onTap: () =>
         controls.start(isOpen ? 'hoverStartOpen' : 'hoverStartClose'),
      onHoverStart: () =>
         controls.start(isOpen ? 'hoverStartOpen' : 'hoverStartClose'),
      onHoverEnd: () =>
         controls.start(isOpen ? 'hoverEndOpen' : 'hoverEndClose'),
   };

   // Render
   return (
      <>
         <SMenu.Button>
            <SMenu.Svg
               xmlns="http://www.w3.org/2000/svg"
               version="1.1"
               ref={ref}
               viewBox={viewBox}
               {...handleAnimation}
            >
               <title>Button Menu Open/Close</title>
               {hexmap.map((hex, i) => {
                  return (
                     <Hexagon
                        key={i}
                        custom={i}
                        variants={variants}
                        originHex={origin}
                        sizeHex={HEX_SIZE}
                        cube={hex}
                     />
                  );
               })}
               {rect && (
                  <>
                     <motion.path
                        variants={topPathVariants}
                        animate={isOpen ? 'open' : 'closed'}
                        initial="initial"
                     />

                     <motion.path
                        d={`M ${path.middle.xStart} ${path.middle.yStart} L ${path.middle.xEnd} ${path.middle.yEnd}`}
                        variants={middlePathVariants}
                        animate={isOpen ? 'open' : 'closed'}
                        initial="initial"
                        transition={{ duration: 0.1 }}
                     />
                     <motion.path
                        variants={bottomPathVariants}
                        animate={isOpen ? 'open' : 'closed'}
                        initial="initial"
                     />
                  </>
               )}
            </SMenu.Svg>
         </SMenu.Button>
      </>
   );
}

function createPath({ xStart, yStart, xEnd, yEnd }: { [key: string]: number }) {
   return `M ${xStart} ${yStart} L ${xEnd} ${yEnd}`;
}
