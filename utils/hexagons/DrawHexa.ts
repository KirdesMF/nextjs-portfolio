import { TCube } from './Cube';
import { Point, TPoint } from './Point';

import { Convert } from './Convert';

type TGetOffset = {
   hexSize: TPoint;
   corner: number;
};
const getOffset = ({ hexSize, corner }: TGetOffset) => {
   let angle = (2 * Math.PI * (0.5 + corner)) / 6;
   return Point({
      x: hexSize.x * Math.cos(angle),
      y: hexSize.y * Math.sin(angle),
   });
};

type TGetPoint = {
   cube: TCube;
   hexSize: TPoint;
   origin: TPoint;
};
const getPoint = ({ cube, hexSize, origin }: TGetPoint) => {
   let center = Convert.CubeToPoint({ cube, hexSize, origin });
   let corners = Array.from({ length: 6 }, (_, corner) => {
      let offset = Corner.getOffset({ hexSize, corner });

      return Point({
         x: center.x + offset.x,
         y: center.y + offset.y,
      });
   });

   return corners;
};

export const Corner = {
   getOffset,
   getPoint,
};

type THexPoints = {
   hexSize: TPoint;
   cube: TCube;
   origin: TPoint;
};

const hexagonPoints = ({ hexSize, cube, origin }: THexPoints) => {
   const hexCorners = Corner.getPoint({ hexSize, cube, origin });
   const points = hexCorners.map(
      (corner) => `${Math.round(corner.x)}, ${Math.round(corner.y)}`
   );

   return points;
};

export { hexagonPoints };
