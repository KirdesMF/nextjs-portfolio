import { css } from 'linaria';
import THEME from 'Theme/theme';
import Hexagon from '@components/Hexagon/Hexagon';
import { TCube, TPoint } from 'utils/hexagons/convert';

// Settings
const VIEWBOX = `0 0 550 550`;
const cube: TCube = { q: 0, r: 0, s: 0 };
const originHex: TPoint = {
   x: 275,
   y: 275,
};
const SIZE = [50, 100, 150, 200, 250];

// Styles
const svg = css`
   --hex-width: 30vw;
   --half: calc(var(--hex-width) / 2);
   --neg: calc(var(--half) * -1);

   pointer-events: none;
   position: fixed;
   z-index: 999;
   width: var(--hex-width);
   transform: rotate(15deg);
`;

const top = css`
   top: var(--neg);
   right: var(--neg);
`;

const bottom = css`
   bottom: var(--neg);
   left: var(--neg);
`;

const hex = css`
   stroke-width: 5;
   fill: ${THEME.COLORS['primary-500']};
`;

// Component
type BigHexagonsProps = {
   mirror?: boolean;
};
export default function BigHexagon({ mirror }: BigHexagonsProps) {
   return (
      <svg
         className={`${svg} ${mirror ? top : bottom}`}
         version="1.1"
         xmlns="http://www.w3.org/2000/svg"
         focusable="false"
         viewBox={VIEWBOX}
      >
         {SIZE.map((sizeHex, i) => (
            <Hexagon
               className={hex}
               key={i}
               originHex={originHex}
               cube={cube}
               sizeHex={sizeHex}
               filter="url(#dropShadow)"
            />
         )).reverse()}
      </svg>
   );
}
