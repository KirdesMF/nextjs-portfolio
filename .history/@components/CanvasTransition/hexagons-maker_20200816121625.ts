import { TPoint, cubeToPoint, TCube, Cube } from '../../utils/hexagons/convert';
import { Utils } from '../../utils/utils';
import { cubeRing, hexCornersPoints } from '../../utils/hexagons/helpers';

type THsl = { h: number; s: number; l: number };
type THexagons = {
   cube: TCube;
   scale: number;
   color: THsl;
   nextColor: THsl;
   delay: number;
   scaleIteration: number;
   scaleTotalIteration: number;
   colorIteration: number;
   colorTotalIteration: number;
   reverse: boolean;
   loop: number;
};

type TDrawHex = {
   ctx: CanvasRenderingContext2D;
   cube: TCube;
   origin: TPoint;
   size: number;
   scale: number;
   color: THsl;
};

type TIsHexOnScreen = {
   hex: TCube;
   size: number;
   origin: TPoint;
   height: number;
   width: number;
};

type TfilteredHexagons = {
   size: number;
   origin: TPoint;
   height: number;
   width: number;
   hexmap: THexagons[];
};

type TsetCanvasHexagons = {
   radius: number;
   color: THsl;
   nextColor: THsl;
};

type TRender = {
   hexmap: THexagons[];
   ctx: CanvasRenderingContext2D;
   origin: TPoint;
   size: number;
};

const isHexOnScreen = (props: TIsHexOnScreen) => {
   let { hex, size, origin, height, width } = props;

   let center = cubeToPoint({ cube: hex, size, origin });

   if (
      Math.round(center.x) < width + size &&
      Math.round(center.x) > 0 - size &&
      Math.round(center.y) < height + size &&
      Math.round(center.y) > 0 - size
   ) {
      return center;
   }
};

const filteredHexagons = ({
   hexmap,
   ...isOnScreenProps
}: TfilteredHexagons) => {
   return hexmap.filter((hex) =>
      isHexOnScreen({
         hex: hex.cube,
         ...isOnScreenProps,
      })
   );
};

const setCanvasHexagons = (props: TsetCanvasHexagons) => {
   const { radius, color, nextColor } = props;
   const originCube = Cube({ q: 0, r: 0, s: 0 });

   const hexmap = Array.from({ length: radius }, (_, index) => {
      return cubeRing({ center: originCube, radius: index });
   });

   hexmap.splice(0, 1, [originCube]);

   const flattedHexmap: THexagons[] = hexmap.flatMap((arr, index) =>
      arr.map((hex) => ({
         cube: hex,
         delay: index * 10,
         color: color,
         nextColor: nextColor,
         scale: 1,
         scaleIteration: 0,
         scaleTotalIteration: Utils.secondsToFrame(1),
         colorIteration: 0,
         colorTotalIteration: Utils.secondsToFrame(2),
         reverse: false,
         loop: 0,
      }))
   );

   return flattedHexmap;
};

const drawCanvasHexagon = (props: TDrawHex) => {
   let { ctx, cube, size, origin, scale, color } = props;

   let hexPoints = hexCornersPoints({ cube, size, origin });
   let center = cubeToPoint({ cube, size, origin });

   ctx.save();

   ctx.translate(center.x, center.y);
   ctx.scale(scale, scale);
   ctx.translate(-center.x, -center.y);

   ctx.beginPath();
   hexPoints.forEach((point) => ctx.lineTo(point.x, point.y));
   ctx.closePath();

   ctx.fillStyle = `hsl(${color.h}, ${color.s}%, ${color.l}%)`;
   ctx.fill();
   ctx.lineWidth = 2;
   ctx.strokeStyle = `hsl(${color.h}, ${color.s}%, ${color.l}%)`;
   ctx.stroke();

   ctx.restore();
};

const renderCanvasHexagons = ({ hexmap, ctx, origin, size }: TRender) => {
   hexmap.forEach((hex) => {
      drawCanvasHexagon({
         ctx: ctx,
         origin: origin,
         size: size,
         cube: hex.cube,
         scale: hex.scale,
         color: hex.color,
      });
   });
};

const easeMultipleValue = (hsl: THsl, i: number, t: number) => {
   return Object.values(hsl).forEach((val, index) => {
      return Utils.ease.easeInCirc({
         i: i * 0.1,
         s: val,
         c: -val,
         t: t,
      });
   });
};

const updateCanvasHexagons = (hexmap: THexagons[]) => {
   hexmap.forEach((hex) => {
      if (hex.loop === 2) {
         hex.color = hex.nextColor;
         return;
      }
      if (
         hex.colorIteration === hex.colorTotalIteration &&
         hex.scaleIteration === hex.scaleTotalIteration
      ) {
         hex.color = hex.nextColor;
         hex.colorIteration = 0;
         return;
      }

      if (hex.delay > 0) {
         --hex.delay;
      }

      if (hex.delay === 0) {
         if (hex.scaleIteration < hex.scaleTotalIteration) {
            ++hex.scaleIteration;
            hex.scale = Utils.ease.easeInCirc({
               i: hex.scaleIteration,
               s: 1,
               c: -1,
               t: hex.scaleTotalIteration,
            });
         }

         if (hex.colorIteration < hex.colorTotalIteration) {
            ++hex.colorIteration;
            hex.color.h = Utils.rangeHue(
               Utils.ease.easeInCirc({
                  i: hex.colorIteration,
                  s: hex.color.h,
                  c: Math.min(-hex.color.h, 1),
                  t: hex.colorTotalIteration,
               })
            );
         }
      }
   });
};

export {
   updateCanvasHexagons,
   renderCanvasHexagons,
   setCanvasHexagons,
   filteredHexagons,
};
