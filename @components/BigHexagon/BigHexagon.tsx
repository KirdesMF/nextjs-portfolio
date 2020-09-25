import Hexagon from '@components/Hexagon/Hexagon';
import { styled } from 'linaria/react';
import React from 'react';
import THEME from 'Theme/theme';
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
   --hex-width: 45rem;
   --half: calc(var(--hex-width) / 2);
   --neg: calc(var(--half) * -1);

   pointer-events: none;
   position: fixed;
   z-index: 999;
   width: var(--hex-width);
   transform: rotate(15deg);

   top: ${({ top }) => (top ? 'var(--neg)' : 'calc(100% - var(--half))')};
   right: ${({ top }) => (top ? 'var(--neg)' : 'calc(100% - var(--half))')};

   & polygon:nth-child(3) {
      fill: ${THEME.COLORS['primary-300']};
      stroke-width: 5;
   }

   & polygon:nth-child(4) {
      fill: ${THEME.COLORS['primary-400']};
      stroke-width: 5;
   }
   & polygon:nth-child(5) {
      fill: ${THEME.COLORS['primary-500']};
      stroke-width: 5;
   }
   & polygon:nth-child(6) {
      fill: ${THEME.COLORS['primary-600']};
      stroke-width: 5;
   }

   & polygon:nth-child(7) {
      fill: ${THEME.COLORS['primary-700']};
      stroke-width: 5;
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
         focusable="false"
         viewBox={VIEWBOX}
      >
         <defs>
            <filter id="shadow">
               <feDropShadow dx="0" dy="0" stdDeviation="4" />
            </filter>
         </defs>

         <defs>
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
         </defs>
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
