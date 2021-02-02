import { css } from '@linaria/core';
import { COLORS } from 'Theme/colors';

const svg = css`
   position: absolute;
   visibility: hidden;
   width: 0;
   height: 0;
`;

export function Filters() {
   return (
      <svg
         version="1.1"
         xmlns="http://www.w3.org/2000/svg"
         focusable="false"
         className={svg}
      >
         <defs>
            <filter id="shadow" filterUnits="objectBoundingBox">
               <feDropShadow dx="0" dy="0" stdDeviation="2" />
            </filter>
         </defs>

         <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
               <stop offset="0%" stopColor="#00bc9b" />
               <stop offset="100%" stopColor="#5eaefd" />
            </linearGradient>
         </defs>

         <defs>
            <filter id="shadow-color">
               <feGaussianBlur
                  in="SourceAlpha"
                  stdDeviation="3"
                  result="DROP"
               ></feGaussianBlur>

               <feFlood
                  floodColor={COLORS['black-25']}
                  result="COLOR"
               ></feFlood>

               <feComposite
                  in="COLOR"
                  in2="DROP"
                  operator="in"
                  result="SHADOW"
               ></feComposite>

               <feOffset
                  in="SHADOW"
                  dx="0"
                  dy="0"
                  result="DROPSHADOW"
               ></feOffset>

               <feMerge>
                  <feMergeNode in="DROPSHADOW"></feMergeNode>
                  <feMergeNode in="SourceGraphic"></feMergeNode>
               </feMerge>
            </filter>
         </defs>

         <defs>
            <filter filterUnits="objectBoundingBox" id="dropShadow">
               <feGaussianBlur
                  in="SourceAlpha"
                  result="blur"
                  stdDeviation="8"
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

         <defs>
            <filter filterUnits="objectBoundingBox" id="innerShadow">
               <feGaussianBlur in="SourceAlpha" stdDeviation="5" />
               <feOffset dx="0" dy="0" result="offsetblur" />
               <feFlood floodColor="black" />
               <feComposite in2="offsetblur" operator="in" />
               <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
               </feMerge>
            </filter>
         </defs>
      </svg>
   );
}
