import { Cube, TCube } from './Cube';

type TMathCubeCoord = {
   cubeA: TCube;
   cubeB: TCube;
};

const rounded = (cube: TCube) => {
   let q = Math.round(cube.q);
   let r = Math.round(cube.r);
   let s = Math.round(cube.s);

   let diffQ = Math.abs(q - cube.q);
   let diffR = Math.abs(r - cube.r);
   let diffS = Math.abs(s - cube.s);

   if (diffQ > diffR && diffQ > diffS) {
      q = -r - s;
   } else if (diffR > diffS) {
      r = -q - s;
   } else {
      s = -q - r;
   }

   return Cube({ q, r, s });
};

const isEqual = ({ cubeA, cubeB }: TMathCubeCoord) =>
   cubeA.q === cubeB.q && cubeA.r === cubeB.r && cubeA.s === cubeB.s;

const add = ({ cubeA, cubeB }: TMathCubeCoord) =>
   Cube({
      q: cubeA.q + cubeB.q,
      r: cubeA.r + cubeB.r,
      s: cubeA.s + cubeB.s,
   });

const substract = ({ cubeA, cubeB }: TMathCubeCoord) =>
   Cube({
      q: cubeA.q - cubeB.q,
      r: cubeA.r - cubeB.r,
      s: cubeA.s - cubeB.s,
   });

const multiply = ({
   cubeA,
   k,
}: Pick<TMathCubeCoord, 'cubeA'> & { k: number }) =>
   Cube({
      q: cubeA.q * k,
      r: cubeA.r * k,
      s: cubeA.s * k,
   });

const length = (cube: TCube) =>
   (Math.abs(cube.q) + Math.abs(cube.r) + Math.abs(cube.s)) / 2;

export const MathCubeCoord = {
   rounded,
   isEqual,
   add,
   substract,
   multiply,
   length,
};
