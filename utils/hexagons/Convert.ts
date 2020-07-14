import { Point, TPoint } from './Point';
import { Cube, TCube } from './Cube';

import { MathCubeCoord } from './MathCube';

/**
 * @description
 *
 * Functions to convert hex to pixel and pixel to hex
 * so Cube coord to point coord and point coord to cube coord
 */

type TCubeToPoint = {
   cube: TCube;
   hexSize: TPoint;
   origin: TPoint;
};
const CubeToPoint = ({ cube, hexSize, origin }: TCubeToPoint) => {
   let x = (Math.sqrt(3) * cube.q + (Math.sqrt(3) / 2) * cube.r) * hexSize.x;
   let y = (3 / 2) * cube.r * hexSize.y;

   return Point({
      x: x + origin.x,
      y: y + origin.y,
   });
};

type TPointToCube = {
   point: TPoint;
   hexSize: TPoint;
   origin: TPoint;
};
const PointToCube = ({ point, hexSize, origin }: TPointToCube) => {
   let q =
      (((point.x - origin.x) * Math.sqrt(3)) / 3 - (point.y - origin.y) / 3) /
      hexSize.x;
   let r = ((point.y - origin.y) * 2) / 3 / hexSize.y;
   let s = -q - r;

   return MathCubeCoord.rounded(Cube({ q, r, s }));
};

export const Convert = {
   CubeToPoint,
   PointToCube,
};
