import { Hexagon } from '@components/Hexagon/Hexagon';
import { TCube, TPoint } from 'utils/hexagons/convert';

import * as styles from './BigHexagon.styles';
// Settings
const VIEWBOX = `0 0 550 550`;
const cube: TCube = { q: 0, r: 0, s: 0 };
const originHex: TPoint = {
   x: 275,
   y: 275,
};
const SIZE = [50, 100, 150, 200, 250];

// Styles

// Component
type BigHexagonsProps = {
   mirror?: boolean;
};
export function BigHexagon(props: BigHexagonsProps) {
   const { mirror } = props;
   return (
      <svg
         className={`${styles.svg} ${mirror ? styles.top : styles.bottom}`}
         version="1.1"
         xmlns="http://www.w3.org/2000/svg"
         focusable="false"
         viewBox={VIEWBOX}
      >
         {SIZE.map((sizeHex, i) => (
            <Hexagon
               className={styles.hex}
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
