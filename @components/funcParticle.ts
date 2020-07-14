const canvas = document.querySelector('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

type CircleType = {
   x: number;
   y: number;
   radius: number;
   color: string;
   directionX: number;
   directionY: number;
};

const ParticleMaker = (options: CircleType) => {
   let { x, y, radius, directionX, directionY, color } = options;

   return {
      draw: () => {
         ctx.beginPath();
         ctx.arc(x, y, radius, 0, Math.PI * 2, false);
         ctx.fillStyle = color;
         ctx.fill();
      },

      update: () => {
         if (x + radius > canvas.width || x - radius < 0) {
            directionX = -directionX;
         }
         if (y + radius > canvas.width || y - radius < 0) {
            directionY = -directionY;
         }

         x += directionX;
         y += directionY;
      },
   };
};

/**
 * 
 * 
 * const ParticleMaker = (options: ParticleType) => {
   let { x, y, radius, directionX, directionY, color } = options;

   const draw = () => {
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2, false);
      ctx.fillStyle = color;
      ctx.fill();
   };

   const update = () => {
      if (x + radius > canvas.width || x - radius < 0) {
         directionX = -directionX;
      }
      if (y + radius > canvas.width || y - radius < 0) {
         directionY = -directionY;
      }

      x += directionX;
      y += directionY;
   };

   return {
      draw,
      update,
   };
};

 */

const newArray = Array.from({ length: 600 }, () => {
   let radius = Math.random() * 30 + 1;
   return ParticleMaker({
      x: Math.random() * (innerWidth - radius * 2 - radius * 2) + radius * 2,
      y: Math.random() * (innerHeight - radius * 2 - radius * 2) + radius * 2,
      radius: radius,
      color: 'yellow',
      directionY: Math.random() * 1 - 0.5,
      directionX: Math.random() * 1 - 0.5,
   });
});

const animate = () => {
   requestAnimationFrame(animate);
   newArray.map((arr) => arr.update());
   ctx.clearRect(0, 0, innerWidth, innerHeight);
   newArray.map((arr) => arr.draw());
};

animate();
