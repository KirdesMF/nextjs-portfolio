import React, { useRef, useEffect, useContext } from 'react';
import { SParticles } from './Particles.styled';
import { ThemeContext } from 'styled-components';
import { useRouter } from 'next/router';
import {
   createParticles,
   renderParticles,
   updateParticles,
} from 'utils/particles/ParticleMarker';
import useCanvas from 'hooks/useCanvas';
import usePathName from 'hooks/usePathName';

export const Particles = () => {
   const { canvasRef, canvasState } = useCanvas();
   const { pathToColor } = usePathName();
   const { pathname } = useRouter();

   useEffect(() => {
      let requestId: number;

      const {
         canvasWidth,
         canvasHeight,
         ctx,
         clearCanvas,
      } = canvasState.current;

      const particles = createParticles(50, pathToColor(pathname));

      const animate = () => {
         clearCanvas();

         updateParticles({
            circles: particles,
            canvasHeight,
            canvasWidth,
         });

         renderParticles({
            ctx: ctx,
            circles: particles,
         });

         requestId = requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);

      return () => cancelAnimationFrame(requestId);
   }, [pathname]);

   return <SParticles.Canvas ref={canvasRef}></SParticles.Canvas>;
};
