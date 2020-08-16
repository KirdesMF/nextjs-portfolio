import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { TPoint } from 'utils/hexagons/convert';
import {
   setCanvasHexagons,
   renderCanvasHexagons,
   updateCanvasHexagons,
   filteredHexagons,
} from '@components/CanvasTransition/hexagons-maker';
import { SCanvasHexagons } from './CanvasTransition.styled';
import useCanvas from 'hooks/useCanvas';
import usePathNameToColor from 'hooks/usePathNameToColor';
import { Utils } from 'utils/utils';

export const CanvasHexagons = () => {
   const { pathname } = useRouter();
   const { canvasRef, canvasState } = useCanvas();
   const { pathToColor } = usePathNameToColor();

   const [startHexColor, setStartHexColor] = useState<{
      h: number;
      s: number;
      l: number;
   }>(null!);

   useEffect(() => {
      setStartHexColor(pathToColor(pathname));
   });

   useEffect(() => {
      let requestId: number;
      let finalScale = 1;

      const time = {
         start: performance.now(),
         total: 8000,
         elapsed: 0,
      };

      const tick = (now: number) => {
         time.elapsed = now - time.start;
         const progress = Math.min(time.elapsed / time.total, 1);
         const position = progress * finalScale;

         filteredHexmap.forEach((hex) => {
            hex.scale = position;
         });
         console.log(position, now);
         if (progress < 1) requestAnimationFrame(tick);
         else console.log(filteredHexmap);
      };

      const {
         canvasWidth,
         canvasHeight,
         ctx,
         clearCanvas,
      } = canvasState.current;

      const size = 100;
      const radius = ~~(canvasWidth / size);
      const origin: TPoint = {
         x: ~~(canvasWidth / 2),
         y: ~~(canvasHeight / 2),
      };

      const hexmap = setCanvasHexagons({
         radius,
         color: startHexColor || { h: 50, s: 50, l: 50 },
         nextColor: pathToColor(pathname),
      });

      const filteredHexmap = filteredHexagons({
         hexmap,
         size,
         origin,
         width: canvasWidth,
         height: canvasHeight,
      });

      const animate = () => {
         // clearCanvas();
         // updateCanvasHexagons(filteredHexmap);
         // renderCanvasHexagons({
         //    hexmap: filteredHexmap,
         //    ctx: ctx,
         //    origin,
         //    size,
         // });

         requestId = requestAnimationFrame(animate);
      };
      requestAnimationFrame(tick);

      return () => cancelAnimationFrame(requestId);
   }, [pathname]);

   return <SCanvasHexagons.Canvas ref={canvasRef}></SCanvasHexagons.Canvas>;
};
