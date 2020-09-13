import React from 'react';
import { hexCornersPoints } from 'utils/hexagons/helpers';
import { TPoint, TCube, cubeToPoint } from 'utils/hexagons/convert';
import { motion, Variants } from 'framer-motion';
import { css } from 'linaria';

type TCreateAtt = {
   originHex: TPoint;
   cube: TCube;
   sizeHex: number;
};

function createAttribPoints({ originHex, cube, sizeHex }: TCreateAtt) {
   return hexCornersPoints({ origin: originHex, cube, size: sizeHex })
      .map((corner) => `${~~corner.x} ${~~corner.y}`)
      .join(',');
}

type THex = {
   originHex: TPoint;
   cube: TCube;
   sizeHex: number;
   custom?: number;
   variants?: Variants;
};

function Hexagon({ originHex, sizeHex, cube, custom, variants }: THex) {
   const points = createAttribPoints({ originHex, sizeHex, cube });
   const centers = cubeToPoint({ origin: originHex, size: sizeHex, cube });

   return (
      <motion.polygon
         className={hex}
         points={points}
         custom={custom}
         variants={variants}
         style={{ transformOrigin: `${~~centers.x}px ${~~centers.y}px` }}
      />
   );
}

const hex = css`
   stroke-width: 3;
   stroke-linejoin: round;
`;

export default Hexagon;
