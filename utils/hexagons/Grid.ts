import { Convert } from './Convert';
import { cubeRing, cubeSpiral } from './Helpers';
import { TPoint } from './Point';
import { Cube } from './Cube';
import { shapeHexagon } from './Shape';

const originCube = Cube({ q: 0, r: 0, s: 0 });

type TGridRing = {
   radius: number;
   svg: HTMLElement;
   hexSize: TPoint;
   className: string;
   transformOrigin?: boolean;
   delay?: number;
   fill?: boolean;
   stroke?: boolean;
};

const ring = ({
   radius,
   svg,
   hexSize,
   className,
   transformOrigin,
   delay = 1,
   fill,
   stroke,
}: TGridRing) => {
   const width = svg.clientWidth;
   const height = svg.clientHeight;

   let origin: TPoint = { x: width / 2, y: height / 2 };

   svg.setAttributeNS(null, 'viewBox', `0 0 ${width} ${height}`);

   let ringCoords = Array.from({ length: radius }, (_, index) => {
      return [...cubeRing({ center: originCube, radius: index })];
   });
   ringCoords[0] = [originCube];

   ringCoords.forEach((coord, index) => {
      coord.forEach((cube) => {
         let centers = Convert.CubeToPoint({
            cube,
            hexSize,
            origin,
         });
      });
   });
};

type TGridSpiral = {
   radius: number;
   svg: HTMLElement;
   hexSize: TPoint;
   className: string;
};
const spiral = ({ radius, svg, hexSize, className }: TGridSpiral) => {
   const width = svg.clientWidth;
   const height = svg.clientHeight;

   let origin: TPoint = { x: width / 2, y: height / 2 };

   svg.setAttributeNS(null, 'viewBox', `0 0 ${width} ${height}`);

   let spiralCoords = cubeSpiral({ center: originCube, radius });

   spiralCoords.forEach((cube, index) => {
      let centers = Convert.CubeToPoint({
         cube,
         hexSize,
         origin,
      });
   });
};

type TGridHexa = {
   radius: number;
   svg: HTMLElement;
   hexSize: TPoint;
   className: string;
};
const hexagon = ({ radius, svg, hexSize, className }: TGridHexa) => {
   const width = svg.clientWidth;
   const height = svg.clientHeight;

   let origin: TPoint = { x: width / 2, y: height / 2 };

   svg.setAttributeNS(null, 'viewBox', `0 0 ${width} ${height}`);
   let map = shapeHexagon(radius);

   map.forEach((cube, index) => {
      let centers = Convert.CubeToPoint({
         cube,
         hexSize,
         origin,
      });
   });
};

export const Grid = {
   ring,
   spiral,
   hexagon,
};
