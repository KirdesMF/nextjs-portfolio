import { TPoint, cubeToPoint, TCube, Cube } from '../../utils/hexagons/convert';
import { Utils } from '../../utils/utils';
import { cubeRing, hexCornersPoints } from '../../utils/hexagons/helpers';

//TODO refactoring hexmap object, eg group scale, scaleIteration and total same with color, reverse, and loop

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

type TSetCanvasHexagons = {
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

const setCanvasHexagons = (props: TSetCanvasHexagons) => {
   const { radius, color, nextColor } = props;
   const originCube = Cube({ q: 0, r: 0, s: 0 });

   const hexmap = Array.from({ length: radius }, (_, index) => {
      return cubeRing({ center: originCube, radius: index });
   });

   hexmap.splice(0, 1, [originCube]);

   const flattedHexmap: THexagons[] = hexmap.flatMap((arr, index) =>
      arr.map((hex) => ({
         cube: hex,
         delay: index,
         color: color,
         nextColor: nextColor,
         scale: 1,
         scaleIteration: 0,
         scaleTotalIteration: Utils.secondsToFrame(0.5),
         colorIteration: 0,
         colorTotalIteration: Utils.secondsToFrame(0.5),
         reverse: false,
         loop: 0,
      }))
   );

   return flattedHexmap;
};

const drawCanvasHexagon = (props: TDrawHex) => {
   const { ctx, cube, size, origin, scale, color } = props;

   let hexPoints = hexCornersPoints({ cube, size, origin });
   let center = cubeToPoint({ cube, size, origin });
   ctx.save();

   ctx.translate(~~center.x, ~~center.y);
   ctx.scale(scale, scale);
   ctx.translate(~~-center.x, ~~-center.y);

   ctx.beginPath();
   hexPoints.forEach((point) => ctx.lineTo(~~point.x, ~~point.y));
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

const updateCanvasHexagons = (hexmap: THexagons[]) => {
   hexmap.forEach((hex) => {
      if (hex.loop === 2) return;

      hex.delay > 0 ? (hex.delay -= 0.1) : (hex.delay = 0);

      if (
         hex.scaleIteration === hex.scaleTotalIteration &&
         hex.colorIteration === hex.colorTotalIteration
      ) {
         hex.loop++;
         hex.reverse = !hex.reverse;
      }

      if (hex.delay === 0) {
         hex.colorIteration < hex.colorTotalIteration
            ? hex.colorIteration++
            : (hex.colorIteration = 0);

         hex.scaleIteration < hex.scaleTotalIteration
            ? hex.scaleIteration++
            : (hex.scaleIteration = 0);

         hex.scale = !hex.reverse
            ? Utils.ease.easeInCirc({
                 i: hex.scaleIteration,
                 s: 1,
                 c: -1,
                 t: hex.scaleTotalIteration,
              })
            : Utils.ease.easeOutCirc({
                 i: hex.scaleIteration,
                 s: 0,
                 c: 1,
                 t: hex.scaleTotalIteration,
              });

         hex.color = !hex.reverse
            ? {
                 ...hex.color,

                 h: Utils.ease.easeOutCirc({
                    i: hex.colorIteration,
                    s: hex.color.h,
                    c: (Math.random() * -hex.color.h) / 10,
                    t: hex.colorTotalIteration,
                 }),

                 s: hex.color.s,
                 l: hex.color.l,
              }
            : {
                 ...hex.color,
                 h: Utils.ease.easeOutExpo({
                    i: hex.colorIteration,
                    s: 0,
                    c: hex.nextColor.h,
                    t: hex.colorTotalIteration,
                 }),

                 s: Utils.ease.easeOutExpo({
                    i: hex.colorIteration,
                    s: 0,
                    c: hex.nextColor.s,
                    t: hex.colorTotalIteration,
                 }),

                 l: Utils.ease.easeOutExpo({
                    i: hex.colorIteration,
                    s: 0,
                    c: hex.nextColor.l,
                    t: hex.colorTotalIteration,
                 }),
              };
      }
   });
};

export {
   updateCanvasHexagons,
   renderCanvasHexagons,
   setCanvasHexagons,
   isHexOnScreen,
};
