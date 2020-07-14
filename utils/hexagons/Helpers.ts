import { Cube, TCube } from './Cube';
import { MathCubeCoord } from './MathCube';
const originCube = Cube({ q: 0, r: 0, s: 0 });

const directions = [
   Cube({ q: 1, r: 0, s: -1 }),
   Cube({ q: 1, r: -1, s: 0 }),
   Cube({ q: 0, r: -1, s: 1 }),
   Cube({ q: -1, r: 0, s: 1 }),
   Cube({ q: -1, r: 1, s: 0 }),
   Cube({ q: 0, r: 1, s: -1 }),
];

const cubeDirection = (direction: number) => {
   return directions[direction];
};

type TNeighbor = {
   cube: TCube;
   direction: number;
};
const cubeNeighbor = ({ cube, direction }: TNeighbor) =>
   MathCubeCoord.add({ cubeA: cube, cubeB: cubeDirection(direction) });

type TRing = {
   center: TCube;
   radius: number;
};
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

type TSpiral = {
   center: TCube;
   radius: number;
};
export const cubeSpiral = ({ center, radius }: TSpiral) => {
   let results: TCube[] = [center];

   for (let i = 1; i <= radius; i++) {
      results = cubeRing({ center, radius });
   }

   return results;
};
