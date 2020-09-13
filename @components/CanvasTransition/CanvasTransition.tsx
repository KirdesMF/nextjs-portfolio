import React, { useEffect, useRef, useState } from 'react';
import {
   setCanvasHexagons,
   renderCanvasHexagons,
   updateCanvasHexagons,
   isHexOnScreen,
} from '@components/CanvasTransition/hexagons-maker';

import useWindowSize from 'hooks/useWindowSize';
import { Utils } from 'utils/utils';
import { useRouter } from 'next/router';
import { css } from 'linaria';
import { Theme } from 'Theme/Theme';

const requestId = 0;
const HEX_SIZE = 160;

const CanvasHexagons = () => {
   const { pathname } = useRouter();
   const canvasRef = useRef<HTMLCanvasElement>(null!);
   const windowSize = useWindowSize();
   const [currentColor, setCurrentColor] = useState({ h: 10, s: 30, l: 50 });

   useEffect(() => {
      const COLOR = getComputedStyle(document.documentElement).getPropertyValue(
         '--background'
      );

      const colorToHsl = Utils.hexToHSL(COLOR);
      setCurrentColor(colorToHsl);

      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

      const width = (canvas.width = windowSize.width);
      const height = (canvas.height = windowSize.height);

      const origin = {
         x: ~~(width / 2),
         y: ~~(height / 2),
      };
      const radius = ~~(height / HEX_SIZE);

      const hexmap = setCanvasHexagons({
         radius,
         color: colorToHsl && currentColor,
         nextColor: colorToHsl,
      }).filter((hex) =>
         isHexOnScreen({
            hex: hex.cube,
            size: HEX_SIZE,
            origin,
            width,
            height,
         })
      );

      function clear() {
         ctx.clearRect(0, 0, width, height);
      }

      function animate(elapsedTime: number) {
         const delta = elapsedTime - (requestId || 0);
         window.requestAnimationFrame(animate);
         if (requestId && delta < 33) return;

         clear();
         updateCanvasHexagons(hexmap);

         renderCanvasHexagons({
            hexmap: hexmap,
            ctx: ctx,
            origin,
            size: HEX_SIZE,
         });
      }
      window.requestAnimationFrame(animate);

      return () => window.cancelAnimationFrame(requestId);
   }, [pathname]);

   return <canvas className={canvas} ref={canvasRef}></canvas>;
};

export default CanvasHexagons;

const canvas = css`
   width: 100%;
   height: 100%;

   position: fixed;
   top: 0;
   left: 0;

   z-index: 2;

   background: ${Theme.COLORS.background};
   filter: brightness(var(--filter-canvas));
`;
