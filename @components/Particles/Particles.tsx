import React, { useRef, useEffect, useContext } from 'react';
import { SCanvas } from './Particles.styled';
import { ThemeContext } from 'styled-components';
import { useRouter } from 'next/router';

type CircleType = {
   x: number;
   y: number;
   radius: number;
   color: string;
   directionX: number;
   directionY: number;
};

const Particles = () => {
   const ref = useRef<HTMLCanvasElement>(null!);
   const { colors } = useContext(ThemeContext);
   const { pathname } = useRouter();
   const pageName = pathname.substring(1);

   useEffect(() => {
      const canvas = ref.current;
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      let requestId: number;

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

      const newArray = Array.from({ length: 50 }, () => {
         let radius = Math.random() * 10 + 1;
         return ParticleMaker({
            x:
               Math.random() * (innerWidth - radius * 2 - radius * 2) +
               radius * 2,
            y:
               Math.random() * (innerHeight - radius * 2 - radius * 2) +
               radius * 2,
            radius: radius,
            color: colors[pageName],
            directionY: Math.random() * 1 - 0.5,
            directionX: Math.random() * 1 - 0.5,
         });
      });

      const animate = () => {
         ctx.clearRect(0, 0, innerWidth, innerHeight);
         newArray.map((arr) => arr.update());
         newArray.map((arr) => arr.draw());

         requestId = requestAnimationFrame(animate);
      };
      animate();

      return () => {
         cancelAnimationFrame(requestId);
      };
   });

   return <SCanvas.Canvas ref={ref}></SCanvas.Canvas>;
};

export default Particles;
