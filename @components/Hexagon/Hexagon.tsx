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

function roundToTwo(num: number) {
   return Number(num.toFixed(2));
}

function createAttribPoints({ originHex, cube, sizeHex }: TCreateAtt) {
   return hexCornersPoints({ origin: originHex, cube, size: sizeHex })
      .map((corner) => `${roundToTwo(corner.x)} ${roundToTwo(corner.y)}`)
      .join(',');
}

type THex = {
   originHex: TPoint;
   cube: TCube;
   sizeHex: number;
   custom?: number;
   variants?: Variants;
   filter?: string;
   className?: string;
};

function Hexagon(props: THex) {
   const {
      originHex,
      sizeHex,
      cube,
      custom,
      variants,
      filter,
      className,
   } = props;

   const points = createAttribPoints({ originHex, sizeHex, cube });
   const centers = cubeToPoint({ origin: originHex, size: sizeHex, cube });

   return (
      <motion.polygon
         filter={filter}
         points={points}
         custom={custom}
         variants={variants}
         style={{ transformOrigin: `${~~centers.x}px ${~~centers.y}px` }}
         className={className}
      />
   );
}

export default Hexagon;
