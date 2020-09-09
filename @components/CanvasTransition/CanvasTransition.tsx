import React, { useEffect, useRef, useContext, useState } from 'react';
import { SCanvasHexagons } from './CanvasTransition.styled';
import {
   setCanvasHexagons,
   renderCanvasHexagons,
   updateCanvasHexagons,
   isHexOnScreen,
} from '@components/CanvasTransition/hexagons-maker';

import usePrevious from 'hooks/usePrevious';
import useWindowSize from 'hooks/useWindowSize';
import { ThemeContext } from 'styled-components';
import { Utils } from 'utils/utils';
import { ColorName } from 'Theme/colors';
import { CSSVAR } from '@components/ColorScheme/ColorScheme';

type TCanvas = {
   pathname: ColorName;
};

let requestId = 0;
const HEX_SIZE = 160;

const CanvasHexagons = ({ pathname }: TCanvas) => {
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
         let delta = elapsedTime - (requestId || 0);
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

   return <SCanvasHexagons.Canvas ref={canvasRef}></SCanvasHexagons.Canvas>;
};

export default CanvasHexagons;
