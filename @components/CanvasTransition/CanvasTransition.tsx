import { useEffect, useRef, useState } from 'react';
import { useCanvasContext } from 'context/CanvasContext';
import { useWindowSize } from 'hooks/useWindowSize';

import {
   setCanvasHexagons,
   renderCanvasHexagons,
   updateCanvasHexagons,
   isHexOnScreen,
} from '@components/CanvasTransition/hexagons-maker';

import { Utils } from 'utils/utils';
import * as styles from './CanvasTransition.styles';
import useAppContext from 'context/AppContext';
import { COLORS } from 'Theme/colors';

export function CanvasTransition() {
   const canvasRef = useRef<HTMLCanvasElement>(null!);
   const windowSize = useWindowSize();
   const { color } = useCanvasContext();
   const { medium } = useAppContext();

   const START_COLOR = Utils.getHSLNumberfromHSLString(COLORS['black-25']);
   const nextColor = Utils.hexToHSL(color);
   const HEX_SIZE = medium ? 150 : 75;

   const [currentColor, setCurrentColor] = useState<{
      h: number;
      s: number;
      l: number;
   }>(START_COLOR);

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

   return <canvas className={styles.canvas} ref={canvasRef}></canvas>;
}
