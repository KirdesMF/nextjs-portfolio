function setUpCanvas() {
   let canvas = document.getElementById('canvas') as HTMLCanvasElement;
   let ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
   ctx.translate(0.5, 0.5);

   // Set display hexSize (vw/vh).
   let hexSizeWidth = (100 * window.innerWidth) / 100,
      hexSizeHeight = (100 * window.innerHeight) / 100 || 766;

   console.log(hexSizeWidth, hexSizeHeight);
   //Setting the canvas site and width to be responsive
   canvas.width = hexSizeWidth;
   canvas.height = hexSizeHeight;
}

type TCube = {
   q: number;
   r: number;
   s: number;
};
function Cube({ ...coords }: TCube) {
   if (Math.round(coords.q + coords.r + coords.s) !== 0) {
      throw 'Should be 0';
   }
   return {
      ...coords,
   };
}

type TPoint = {
   x: number;
   y: number;
};
function Point({ ...points }: TPoint) {
   return {
      ...points,
   };
}

function CubeFactory() {
   return {};
}

type TConvert = {
   cube: TCube;
   point: TPoint;
   hexSize: TPoint;
   origin: TPoint;
};
function ConvertFactory() {
   return {
      CubeToPoint: function ({
         cube,
         hexSize,
         origin,
      }: Pick<TConvert, 'cube' | 'hexSize' | 'origin'>) {
         let x =
            (Math.sqrt(3) * cube.q + (Math.sqrt(3) / 2) * cube.r) * hexSize.x;
         let y = (3 / 2) * cube.r * hexSize.y;

         return Point({
            x: x + origin.x,
            y: y + origin.y,
         });
      },

      RoundCube: function (cube: TCube) {
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
      },

      PointToCube: function ({
         point,
         hexSize,
         origin,
      }: Pick<TConvert, 'point' | 'hexSize' | 'origin'>) {
         let q =
            (((point.x - origin.x) * Math.sqrt(3)) / 3 -
               (point.y - origin.y) / 3) /
            hexSize.x;
         let r = ((point.y - origin.y) * 2) / 3 / hexSize.y;
         let s = -q - r;

         return this.RoundCube(Cube({ q, r, s }));
      },
   };
}

type TCornerFact = {
   hexSize: TPoint;
   corner: number;
   cube: TCube;
   origin: TPoint;
};
function CornerHexFactory() {
   return {
      GetOffsetCorner: function ({
         hexSize,
         corner,
      }: Pick<TCornerFact, 'hexSize' | 'corner'>) {
         let angle = (2 * Math.PI * (0.5 + corner)) / 6;
         return Point({
            x: hexSize.x * Math.cos(angle),
            y: hexSize.y * Math.sin(angle),
         });
      },

      GetCornersPoints: function ({
         hexSize,
         cube,
         origin,
      }: Pick<TCornerFact, 'hexSize' | 'cube' | 'origin'>) {
         let center = ConvertFactory().CubeToPoint({ cube, hexSize, origin });
         let corners = Array.from({ length: 6 }, (_, corner) => {
            let offset = this.GetOffsetCorner({ hexSize, corner });

            return Point({
               x: center.x + offset.x,
               y: center.y + offset.y,
            });
         });

         return corners;
      },
   };
}

type TDrawHex = {
   ctx: CanvasRenderingContext2D;
   hexSize: TPoint;
   cube: TCube;
   origin: TPoint;
};
function DrawHex({ ctx, hexSize, cube, origin }: TDrawHex) {
   let hexCorners = CornerHexFactory().GetCornersPoints({
      hexSize,
      cube,
      origin,
   });

   ctx.beginPath();
   hexCorners.forEach((corner) => ctx.lineTo(corner.x, corner.y));
   ctx.closePath();

   // Draw on canvas
   ctx.fillStyle = 'purple';
   ctx.fill();
   ctx.strokeStyle = 'red';
   ctx.lineWidth = 10;
   ctx.stroke();
}

function shapeHexagon(radius: number) {
   let hexMap: TCube[] = [];
   let r1: number, r2: number;
   for (let q = -radius; q <= radius; q++) {
      r1 = Math.max(-radius, -q - radius);
      r2 = Math.min(radius, -q + radius);

      for (let r = r1; r <= r2; r++) {
         hexMap.push(
            Cube({
               q: q,
               r: r,
               s: -q - r,
            })
         );
      }
   }
   return hexMap;
}

type TDrawGrid = {
   radius: number;
   hexSize: TPoint;
};
function DrawGrid({ radius, hexSize }: TDrawGrid) {
   let hexes = shapeHexagon(radius);

   const canvas = document.getElementById('canvas') as HTMLCanvasElement;
   const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
   const width = canvas.width;
   const height = canvas.height;

   console.log(width, height);

   ctx.fillStyle = 'red';
   ctx.fillRect(0, 0, width, height);
   hexes.forEach((hex) =>
      DrawHex({
         ctx: ctx,
         hexSize: hexSize,
         cube: hex,
         origin: {
            x: width / 2,
            y: height / 2,
         },
      })
   );
}

function PointerCoord(e: MouseEvent) {
   const canvas = document.getElementById('canvas') as HTMLCanvasElement;

   let { left, top } = canvas.getBoundingClientRect();

   const width = canvas.width;
   const height = canvas.height;

   console.log(width, height);
   let { q, r, s } = ConvertFactory().PointToCube({
      point: {
         x: e.pageX - left,
         y: e.pageY - top,
      },
      hexSize: { x: 20, y: 20 },
      origin: {
         x: width / 2,
         y: height / 2,
      },
   });

   let { x, y } = ConvertFactory().CubeToPoint({
      cube: Cube({ q, s, r }),
      hexSize: { x: 20, y: 20 },
      origin: {
         x: width / 2,
         y: height / 2,
      },
   });

   ctx.clearRect(x, y, width, height);
   DrawHex({
      ctx: ctx,
      hexSize: { x: 20, y: 20 },
      cube: { q, s, r },
      origin: {
         x: width / 2,
         y: height / 2,
      },
   });
}

const setUpGrid: TDrawGrid = {
   radius: 50,
   hexSize: { x: 20, y: 20 },
};
setUpCanvas();
window.addEventListener('rehexSize', () => {
   setUpCanvas();
   DrawGrid({ ...setUpGrid });
});

DrawGrid({ ...setUpGrid });
canvas.addEventListener('mousemove', PointerCoord);

function highLightHex(e: MouseEvent) {
   const canvas = document.getElementById('canvas') as HTMLCanvasElement;
   const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
   let { left, top } = canvas.getBoundingClientRect();

   let x = e.clientX - left;
   let y = e.clientY - top;

   DrawGrid({ ...setUpGrid });
   ctx.fillStyle = ctx.isPointInPath(x, y) ? 'red' : 'blue';
   ctx.fill();
}
