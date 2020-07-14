export type TPoint = {
   x: number;
   y: number;
};

/**
 * @description
 * Store cardinal coord
 * We'll need to convert  Cube coord to Point coord, back and forth
 *
 * @param x
 * @param y
 *
 * @returns
 * an object with Point coord x,y
 */
function Point({ ...points }: TPoint) {
   return {
      ...points,
   };
}

export { Point };
