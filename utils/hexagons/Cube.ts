export type TCube = {
   q: number;
   r: number;
   s: number;
};

/**
 * @description
 * Store Cube coord for hexagon
 * Sum of the coord should be equal to 0
 *
 * More info here
 * https://www.redblobgames.com/grids/hexagons/implementation.html#hex
 *
 * @param q
 * @param r
 * @param s
 *
 * @returns
 * an object with Cube coord q,r,s
 */
function Cube({ ...coords }: TCube) {
   if (coords.q + coords.r + coords.s !== 0) {
      throw new Error('Sums of three coords should be 0');
   }
   return {
      ...coords,
   };
}

export { Cube };
