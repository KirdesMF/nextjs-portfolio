import Hexagon from '@components/Hexagon/Hexagon';
import { Icon } from '@components/Icon/Icon';
import { css } from 'linaria';
import React from 'react';
import { TCube, TPoint } from 'utils/hexagons/convert';
import { cubeSpiral } from 'utils/hexagons/helpers';

const VIEWBOX = `0 0 100 100`;
const ORIGIN: TPoint = { x: 50, y: 50 };
const ORIGIN_CUBE: TCube = { q: 0, r: 0, s: 0 };

const HEXMAP = cubeSpiral({ center: ORIGIN_CUBE, radius: 1 });

function HexesHomeNav() {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         focusable="false"
         viewBox={VIEWBOX}
      >
         {HEXMAP.map((hexes, i) => {
            return (
               <Hexagon key={i} originHex={ORIGIN} cube={hexes} sizeHex={10} />
            );
         })}
      </svg>
   );
}

export default HexesHomeNav;
