import Hexagon from '@components/Hexagon/Hexagon';
import { css } from 'linaria';
import Link from 'next/link';
import React from 'react';
import theme from 'Theme/theme';
import { TCube, TPoint } from 'utils/hexagons/convert';

const VIEWBOX = `0 0 600 600`;
const ORIGIN: TPoint = { x: 300, y: 300 };
const SIZE = 275;

const cube: TCube = { q: 0, r: 0, s: 0 };

const nav = css`
   position: fixed;
   z-index: 15;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);

   width: 30%;
   height: 50%;
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   grid-template-rows: 1fr 1fr;

   > a[href='/about'] {
      grid-column: 1/3;
      grid-row: 1/2;
   }

   > a[href='/works'] {
      grid-column: 3/5;
      grid-row: 1/2;
   }

   > a[href='/contact'] {
      grid-column: 2/4;
      grid-row: 2/3;
   }

   > a {
      position: relative;
      transition: transform 1s ease;

      &:hover {
         filter: drop-shadow(0 0 5px black);
         transform: scale(1.1);
      }

      > span {
         position: absolute;
         z-index: 10;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         font-size: 2rem;
         font-family: 'Decovar';
      }
   }

   & a > svg {
      width: 100%;
      height: 100%;
      filter: drop-shadow(0 0 0 black);

      > polygon {
         fill: ${theme.COLORS['secondary-300']};
         transform: scale(1);
      }
   }
`;

function HomeNav() {
   return (
      <nav className={nav}>
         <Link href="/about">
            <a>
               <span>ABOUT</span>
               <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={VIEWBOX}
               >
                  <Hexagon sizeHex={SIZE} originHex={ORIGIN} cube={cube} />
               </svg>
            </a>
         </Link>

         <Link href="/works">
            <a>
               <span>WORKS</span>
               <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={VIEWBOX}
               >
                  <Hexagon sizeHex={SIZE} originHex={ORIGIN} cube={cube} />
               </svg>
            </a>
         </Link>
         <Link href="/contact">
            <a>
               <span>CONTACT</span>
               <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={VIEWBOX}
               >
                  <Hexagon sizeHex={SIZE} originHex={ORIGIN} cube={cube} />
               </svg>
            </a>
         </Link>
      </nav>
   );
}

export default HomeNav;
