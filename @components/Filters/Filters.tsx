import { css } from 'linaria';

const svg = css`
   position: absolute;
   visibility: hidden;
   width: 0;
   height: 0;
`;

export default function Filters() {
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
