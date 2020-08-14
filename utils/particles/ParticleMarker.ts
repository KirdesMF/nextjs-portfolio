import { Utils } from 'utils/utils';

type TParticle = {
   x: number;
   y: number;
   dirX: number;
   dirY: number;
   radius: number;
   color: string;
};

type TDrawParticle = {
   ctx: CanvasRenderingContext2D;
   x: number;
   y: number;
   radius: number;
   color: string;
};

type TrenderParticles = {
   ctx: CanvasRenderingContext2D;
   circles: TParticle[];
};

type TupdateParticles = {
   circles: TParticle[];
   canvasWidth: number;
   canvasHeight: number;
};

const createParticles = (numOfCircle: number, color: string): TParticle[] => {
   return Array.from({ length: numOfCircle }, () => {
      // Randomize radius
      let radius = ~~(Math.random() * 10);

      return {
         x: ~~(
            Math.random() * (window.innerWidth - radius * 2 - radius * 2) +
            radius * 2
         ),
         y: ~~(
            Math.random() * (window.innerHeight - radius * 2 - radius * 2) +
            radius * 2
         ),
         dirX: Utils.toFixNumber(Math.random() * 1 - 0.25),
         dirY: Utils.toFixNumber(Math.random() * 1 - 0.25),
         radius: radius,
         color: color,
      };
   });
};

const drawParticle = (props: TDrawParticle) => {
   let { x, y, radius, color, ctx } = props;

   ctx.beginPath();
   ctx.arc(x, y, radius, 0, Math.PI * 2, false);
   ctx.fillStyle = color;
   ctx.fill();
};

const renderParticles = ({ ctx, circles }: TrenderParticles) => {
   circles.forEach((circle) =>
      drawParticle({
         ctx: ctx,
         x: circle.x,
         y: circle.y,
         radius: circle.radius,
         color: circle.color,
      })
   );
};

const updateParticles = (props: TupdateParticles) => {
   const { circles, canvasWidth, canvasHeight } = props;

   circles.forEach((circle) => {
      if (circle.x - circle.radius > canvasWidth) circle.x = 0;
      else if (circle.x + circle.radius < 0) circle.x = canvasWidth;

      if (circle.y - circle.radius > canvasHeight) circle.y = 0;
      else if (circle.y + circle.radius < 0) circle.y = canvasHeight;

      circle.x += circle.dirX;
      circle.y += circle.dirY;
   });
};

export { createParticles, renderParticles, updateParticles };
