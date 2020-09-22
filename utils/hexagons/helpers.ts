import { Cube, TCube, TPoint, Point, cubeToPoint } from './convert';
import { MathCubeCoord } from './math-cube';

const directions = [
   Cube({ q: 1, r: 0, s: -1 }),
   Cube({ q: 1, r: -1, s: 0 }),
   Cube({ q: 0, r: -1, s: 1 }),
   Cube({ q: -1, r: 0, s: 1 }),
   Cube({ q: -1, r: 1, s: 0 }),
   Cube({ q: 0, r: 1, s: -1 }),
];

const cubeDirection = (direction: number) => directions[direction];

type TNeighbor = {
   cube: TCube;
   direction: number;
};

const cubeNeighbor = ({ cube, direction }: TNeighbor) => {
   return MathCubeCoord.add({ cubeA: cube, cubeB: cubeDirection(direction) });
};

// Ring

type TRing = {
   center: TCube;
   radius: number;
};

export const cubeRing = ({ center, radius }: TRing) => {
   let cube = MathCubeCoord.add({
      cubeA: center,
      cubeB: MathCubeCoord.multiply({ cubeA: cubeDirection(4), k: radius }),
   });

   const results: TCube[] = [];

   for (let i = 0; i < 6; i++) {
      for (let j = 0; j < radius; j++) {
         cube = cubeNeighbor({ cube: cube, direction: i });
         results.push(cube);
      }
   }
   return results;
};

// Spiral

type TSpiral = {
   center: TCube;
   radius: number;
};

export const cubeSpiral = ({ center, radius }: TSpiral) => {
   let results: TCube[] = [];

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
   const angle = (2 * Math.PI * (0.5 + corner)) / 6;
   return Point({
      x: size * Math.cos(angle),
      y: size * Math.sin(angle),
   });
};

export const hexCornersPoints = ({ cube, size, origin }: THexPoints) => {
   const center = cubeToPoint({ cube, size, origin });
   const corners = Array.from({ length: 6 }, (_, corner) => {
      const offset = getOffset({ size, corner });

      return Point({
         x: center.x + offset.x,
         y: center.y + offset.y,
      });
   });

   return corners;
};

export const createHexMapShapeHexagons = (radius: number) => {
   const hexmap: TCube[] = [];
   let r1: number, r2: number;
   for (let q = -radius; q <= radius; q++) {
      r1 = Math.max(-radius, -q - radius);
      r2 = Math.min(radius, -q + radius);

      for (let r = r1; r <= r2; r++) {
         hexmap.push(
            Cube({
               q: q,
               r: r,
               s: -q - r,
            })
         );
      }
   }
   return hexmap;
};
