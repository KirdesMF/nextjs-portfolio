import Hexagon from '@components/Hexagon/Hexagon';
import { styled } from 'linaria/react';
import React from 'react';
import theme from 'Theme/theme';
import { TCube, TPoint } from 'utils/hexagons/convert';

const VIEWBOX = `0 0 550 550`;
const cube: TCube = { q: 0, r: 0, s: 0 };
const originHex: TPoint = {
   x: 275,
   y: 275,
};
const SIZE = [50, 100, 150, 200, 250];

type SvgType = {
   top?: boolean;
};

const Svg = styled.svg<SvgType>`
   position: fixed;
   z-index: 999;
   width: 25em;
   transform: rotate(15deg);

   top: ${({ top }) => (top ? '-12.5em' : 'calc(100% - 12.5em)')};
   right: ${({ top }) => (top ? '-12.5em' : 'calc(100% - 12.5em)')};

   > polygon {
      fill: ${theme.COLORS.background};
      stroke: none;
   }
`;

type BigHexagonProps = {
   top?: boolean;
};
function BigHexagon({ top }: BigHexagonProps) {
   return (
      <Svg
         top={top}
         version="1.1"
         xmlns="http://www.w3.org/2000/svg"
         viewBox={VIEWBOX}
      >
         <filter filterUnits="objectBoundingBox" id="dropShadow">
            <feGaussianBlur
               in="SourceAlpha"
               result="blur"
               stdDeviation="4"
            ></feGaussianBlur>
            <feOffset
               dx="0"
               dy="0"
               in="blur"
               result="offsetBlurredAlpha"
            ></feOffset>
            <feMerge>
               <feMergeNode in="offsetBlurredAlpha"></feMergeNode>
               <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
         </filter>

         {SIZE.map((sizeHex, i) => (
            <Hexagon
               key={i}
               originHex={originHex}
               cube={cube}
               sizeHex={sizeHex}
               filter="url(#dropShadow)"
            />
         )).reverse()}
      </Svg>
   );
}

export default BigHexagon;
