import React, { useEffect, useRef, useContext } from 'react';
import { SCanvasHexagons } from './CanvasTransition.styled';
import {
   setCanvasHexagons,
   renderCanvasHexagons,
   updateCanvasHexagons,
   isHexOnScreen,
} from '@components/CanvasTransition/hexagons-maker';

import usePrevious from 'hooks/usePrevious';
import useWindowSize from 'hooks/useWindowSize';
import usePathName from 'hooks/usePathName';
import { ThemeContext } from 'styled-components';
import { Utils } from 'utils/utils';

type TCanvas = {
   pathname: URLType;
};

const CanvasHexagons = ({ pathname }: TCanvas) => {
   const canvasRef = useRef<HTMLCanvasElement>(null!);
   const { pathToTitle } = usePathName();
   const { colors } = useContext(ThemeContext);
   const prevPathname = usePrevious(pathname);
   const windowSize = useWindowSize();

   const prevColor =
      prevPathname &&
      Utils.getNumberFromString(colors[pathToTitle(prevPathname)]);
   const nextColor =
      pathname && Utils.getNumberFromString(colors[pathToTitle(pathname)]);

   useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

      const width = (canvas.width = windowSize.width);
      const height = (canvas.height = windowSize.height);

      let requestId = 0;

      const HEX_SIZE = 175;
      const origin = {
         x: ~~(width / 2),
         y: ~~(height / 2),
      };
      const radius = ~~(height / HEX_SIZE);

      const hexmap = setCanvasHexagons({
         radius,
         color: prevColor ?? nextColor,
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

      function animate(elapsedTime: number) {
         let delta = elapsedTime - (requestId || 0);
         window.requestAnimationFrame(animate);
         if (requestId && delta < 33) return;

         clear();
         updateCanvasHexagons(hexmap);

         ctx.beginPath();
         renderCanvasHexagons({
            hexmap: hexmap,
            ctx: ctx,
            origin,
            size: HEX_SIZE,
         });
         ctx.closePath();
      }
      window.requestAnimationFrame(animate);

      return () => window.cancelAnimationFrame(requestId);
   }, [pathname]);

   return <SCanvasHexagons.Canvas ref={canvasRef}></SCanvasHexagons.Canvas>;
};

export default CanvasHexagons;
