import { useEffect, useRef, useState } from 'react';
import useCanvasContext from 'context/CanvasContext';
import useWindowSize from 'hooks/useWindowSize';

import {
   setCanvasHexagons,
   renderCanvasHexagons,
   updateCanvasHexagons,
   isHexOnScreen,
} from '@components/CanvasTransition/hexagons-maker';

import { Utils } from 'utils/utils';
import { css } from 'linaria';

const HEX_SIZE = 150;

const canvas = css`
   width: 100%;
   height: 100%;

   position: fixed;
   top: 0;
   left: 0;
   pointer-events: none;

   background: hsl(240, 50%, 10%);
`;

export default function CanvasHexagons() {
   const canvasRef = useRef<HTMLCanvasElement>(null!);
   const windowSize = useWindowSize();
   const { color } = useCanvasContext();

   const [currentColor, setCurrentColor] = useState<{
      h: number;
      s: number;
      l: number;
   }>({ h: 0, s: 0, l: 0 });

   const nextColor = Utils.hexToHSL(color);

   useEffect(() => {
      setCurrentColor(nextColor);

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
         color: currentColor,
         nextColor: nextColor,
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

      let requestId: number;

      function animate() {
         requestId = requestAnimationFrame(animate);

         clear();
         updateCanvasHexagons(hexmap);

         renderCanvasHexagons({
            hexmap: hexmap,
            ctx: ctx,
            origin,
            size: HEX_SIZE,
         });
      }
      requestId = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(requestId);
   }, [color]);

   return <canvas className={canvas} ref={canvasRef}></canvas>;
}
