export type TPoint = {
   x: number;
   y: number;
};

export type TCube = {
   q: number;
   r: number;
   s: number;
};

type TConvert = {
   cube: TCube;
   point: TPoint;
   size: number;
   origin: TPoint;
};

const Point = ({ ...points }: TPoint) => points;
const Cube = ({ ...cubes }: TCube) => cubes;

const cubeToPoint = ({ cube, size, origin }: Omit<TConvert, 'point'>) => {
   let x =
      (Math.sqrt(3) * cube.q + (Math.sqrt(3) / 2) * cube.r) * size + origin.x;
   let y = (3 / 2) * cube.r * size + origin.y;

   return Point({ x, y });
};

export { Point, Cube, cubeToPoint };
