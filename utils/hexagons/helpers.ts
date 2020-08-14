import { Cube, TCube, TPoint, Point, cubeToPoint } from './convert';
import { MathCubeCoord } from './math-cube';

type TNeighbor = {
   cube: TCube;
   direction: number;
};

type TRing = {
   center: TCube;
   radius: number;
};

type TSpiral = {
   center: TCube;
   radius: number;
};

const directions = [
   Cube({ q: 1, r: 0, s: -1 }),
   Cube({ q: 1, r: -1, s: 0 }),
   Cube({ q: 0, r: -1, s: 1 }),
   Cube({ q: -1, r: 0, s: 1 }),
   Cube({ q: -1, r: 1, s: 0 }),
   Cube({ q: 0, r: 1, s: -1 }),
];

const cubeDirection = (direction: number) => directions[direction];

const cubeNeighbor = ({ cube, direction }: TNeighbor) => {
   return MathCubeCoord.add({ cubeA: cube, cubeB: cubeDirection(direction) });
};

// Ring
export const cubeRing = ({ center, radius }: TRing) => {
   let cube = MathCubeCoord.add({
      cubeA: center,
      cubeB: MathCubeCoord.multiply({ cubeA: cubeDirection(4), k: radius }),
   });

   let results: TCube[] = [];

   for (let i = 0; i < 6; i++) {
      for (let j = 0; j < radius; j++) {
         cube = cubeNeighbor({ cube: cube, direction: i });
         results.push(cube);
      }
   }
   return results;
};

// Spiral
export const cubeSpiral = ({ center, radius }: TSpiral) => {
   let results: TCube[] = [center];

   for (let i = 1; i <= radius; i++) {
      results = cubeRing({ center, radius });
   }

   return results;
};

type TGetOffset = {
   size: number;
   corner: number;
};

type THexPoints = {
   cube: TCube;
   size: number;
   origin: TPoint;
};

const getOffset = ({ size, corner }: TGetOffset) => {
   let angle = (2 * Math.PI * (0.5 + corner)) / 6;
   return Point({
      x: size * Math.cos(angle),
      y: size * Math.sin(angle),
   });
};

export const hexCornersPoints = ({ cube, size, origin }: THexPoints) => {
   let center = cubeToPoint({ cube, size, origin });
   let corners = Array.from({ length: 6 }, (_, corner) => {
      let offset = getOffset({ size, corner });

      return Point({
         x: center.x + offset.x,
         y: center.y + offset.y,
      });
   });

   return corners;
};
