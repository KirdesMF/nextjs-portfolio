import { Hexagon } from '@components/Hexagon/Hexagon';
import { css } from '@linaria/core';
import { Variants } from 'framer-motion';
import { adjustLightness, adjustSaturation, COLORS } from 'Theme/colors';
import { createHexMapRing } from 'utils/hexagons/helpers';
import { motion } from 'framer-motion';

const HEX_SIZE = 50;

const HEXMAP = createHexMapRing(5);
const originHex = { x: 250, y: 250 };

const parents = {
   animate: {
      transition: {
         when: 'beforeChildren',
         duration: 5,
      },
   },
};
const variants: Variants = {
   animate: (custom: number) => ({
      scale: [1, 0, 1],
      transition: {
         delay: custom * 0.2,
      },
   }),
};

export function HexesGrid() {
   return (
      <div className={container}>
         <motion.svg
            viewBox="0 0 500 500"
            className={svg}
            animate="animate"
            variants={parents}
         >
            {HEXMAP.map(({ radius, ...cube }, index) => (
               <Hexagon
                  key={index}
                  sizeHex={HEX_SIZE}
                  originHex={originHex}
                  cube={cube}
                  variants={variants}
                  custom={radius}
                  className={hexes}
               />
            ))}
         </motion.svg>
      </div>
   );
}

const container = css`
   width: 500px;
   height: 500px;
   margin: 0 auto;
   position: fixed;
   top: 15%;
   left: 40%;
`;
const svg = css`
   width: 100%;
   height: 100%;
`;

const hexes = css`
   fill: ${COLORS.home};
   stroke: ${COLORS.home};
   stroke-width: 1px;
`;
