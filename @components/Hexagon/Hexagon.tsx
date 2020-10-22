import React from 'react';
import { hexCornersPoints } from 'utils/hexagons/helpers';
import { TPoint, TCube, cubeToPoint } from 'utils/hexagons/convert';
import { AnimationControls, motion, Variants } from 'framer-motion';

type TCreateAtt = {
   originHex: TPoint;
   cube: TCube;
   sizeHex: number;
};

function roundToTwo(num: number) {
   return Number(num.toFixed(2));
}

export function createAttribPoints({ originHex, cube, sizeHex }: TCreateAtt) {
   return hexCornersPoints({ origin: originHex, cube, size: sizeHex })
      .map((corner) => `${roundToTwo(corner.x)} ${roundToTwo(corner.y)}`)
      .join(',');
}

type THex = {
   originHex: TPoint;
   cube: TCube;
   sizeHex: number;
   custom?: unknown;
   variants?: Variants;
   filter?: string;
   clipPath?: string;
   animate?: string | AnimationControls;
   initial?: string;
   exit?: string;
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
      clipPath,
      className,
      animate,
      initial,
      exit,
   } = props;

   const points = createAttribPoints({ originHex, sizeHex, cube });
   const centers = cubeToPoint({ origin: originHex, size: sizeHex, cube });

   return (
      <motion.polygon
         filter={filter}
         clipPath={clipPath}
         points={points}
         custom={custom}
         variants={variants}
         animate={animate}
         initial={initial}
         exit={exit}
         style={{ transformOrigin: `${~~centers.x}px ${~~centers.y}px` }}
         className={className}
      />
   );
}

export default Hexagon;
