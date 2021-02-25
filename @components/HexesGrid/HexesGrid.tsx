import { Hexagon } from '@components/Hexagon/Hexagon';
import { css } from '@linaria/core';
import { Variants } from 'framer-motion';
import { adjustLightness, adjustSaturation, COLORS } from 'Theme/colors';
import { createHexMapRing } from 'utils/hexagons/helpers';
import { motion } from 'framer-motion';
import { BREAKPOINTS } from 'Theme/breakpoints';
import { useRouter } from 'next/router';

const HEX_SIZE = 70;
const HEXMAP = createHexMapRing(6);
const originHex = { x: 250, y: 250 };

export function HexesGrid() {
   const router = useRouter();
   const pathname =
      router.pathname === '/'
         ? 'home'
         : (router.pathname.substr(1) as keyof typeof COLORS);

   return (
      <div className={container}>
         <motion.svg viewBox="0 0 500 500" className={svg}>
            {HEXMAP.map(({ radius, ...cube }, index) => (
               <Hexagon
                  key={index}
                  sizeHex={HEX_SIZE}
                  originHex={originHex}
                  cube={cube}
                  animate="animate"
                  initial="initial"
                  variants={variants}
                  custom={{ custom: radius, color: COLORS[pathname] }}
                  className={hexes}
               />
            ))}
         </motion.svg>
      </div>
   );
}

const variants: Variants = {
   animate: ({ custom, color }) => ({
      scale: [1, 0, 1],
      fill: color,
      stroke: color,
      transition: {
         delay: custom * 0.2,
      },
   }),
   initial: ({ color }) => ({
      fill: color,
      stroke: color,
   }),
};

const container = css`
   width: 100%;
   height: 100%;
   position: fixed;
   top: 0;
   left: 0;
   z-index: -1;

   @media screen and (min-width: ${BREAKPOINTS.large}) {
      width: 40%;
      height: 60%;

      position: absolute;
      top: 15%;
      left: 42%;
   }
`;
const svg = css`
   width: 100%;
   height: 100%;

   @media screen and (min-width: ${BREAKPOINTS.large}) {
      border-radius: 20px;
   }
`;

const hexes = css`
   stroke-width: 2px;
`;
