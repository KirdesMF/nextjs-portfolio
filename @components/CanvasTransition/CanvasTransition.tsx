import React, { useEffect, useState } from 'react';

import { SCanvasHexagons } from './CanvasTransition.styled';

import { useRouter } from 'next/router';
import useCanvas from 'hooks/useCanvas';
import usePathNameToColor from 'hooks/usePathNameToColor';
import {
   setCanvasHexagons,
   renderCanvasHexagons,
   updateCanvasHexagons,
   isHexOnScreen,
} from '@components/CanvasTransition/hexagons-maker';

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

      const {
         canvasWidth,
         canvasHeight,
         ctx,
         clearCanvas,
      } = canvasState.current;

      const size = 100;
      const radius = ~~(canvasWidth / size);
      const origin = {
         x: ~~(canvasWidth / 2),
         y: ~~(canvasHeight / 2),
      };

      const hexmap = setCanvasHexagons({
         radius,
         color: startHexColor ?? pathToColor(pathname),
         nextColor: pathToColor(pathname),
      }).filter((hex) =>
         isHexOnScreen({
            hex: hex.cube,
            size,
            origin,
            width: canvasWidth,
            height: canvasHeight,
         })
      );

      const animate = () => {
         clearCanvas();
         updateCanvasHexagons(hexmap);
         renderCanvasHexagons({
            hexmap: hexmap,
            ctx: ctx,
            origin,
            size,
         });

         requestId = requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);

      return () => cancelAnimationFrame(requestId);
   }, [pathname]);

   return <SCanvasHexagons.Canvas ref={canvasRef}></SCanvasHexagons.Canvas>;
};
