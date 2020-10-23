import React from 'react';
import { styled } from 'linaria/react';
import { icons, NameIconType } from './icons';
import Hexagon from '@components/Hexagon/Hexagon';
import { TCube, TPoint } from 'utils/hexagons/convert';
import THEME from 'Theme/theme';
import { css } from 'linaria';

type SIconType = {
   size?: string;
   iconColor?: string;
   hover?: string;
   rotation?: string;
};

/**=================== Styled ============================== */
const SIcon = styled.svg<SIconType>`
   width: ${(props) => props.size || '1rem'};
   color: ${(props) => props.iconColor || 'black'};
   transform-origin: center;
   transform: ${(props) => `rotate(${props.rotation || 0})`};
   transition: color 500ms linear;

   @media (hover: hover) and (pointer: fine) {
      &:hover {
         color: ${(props) => props.hover || 'black'};
      }
   }
`;

type IconProps = {
   name: NameIconType;
   size?: string;
   iconColor?: string;
   hover?: string;
   rotation?: string;
   classname?: string;
   filter?: 'url(#shadow)' | 'url(#dropShadow)';
};

function Icon(props: IconProps) {
   const { size, iconColor, hover, name, rotation, classname } = props;

   return (
      <SIcon
         className={classname}
         size={size}
         iconColor={iconColor}
         hover={hover}
         rotation={rotation}
         viewBox={name === 'CED' ? '0 0 530 530' : '0 0 24 24'}
         xmlns="http://www.w3.org/2000/svg"
      >
         <title>{icons[name].title}</title>
         {icons[name].svg}
      </SIcon>
   );
}

const cube: TCube = { q: 0, r: 0, s: 0 };
const origin: TPoint = { x: 48, y: 48 };
const SIZE_HEX = [40, 38, 36];

const svg = css`
   & > polygon:nth-of-type(odd) {
      transform: rotate(-15deg);
      fill: none;
      stroke: ${THEME.COLORS['primary-300']};
      stroke-width: 3;
   }

   & > polygon:nth-of-type(even) {
      transform: rotate(15deg);
      fill: none;
      stroke: ${THEME.COLORS['primary-400']};
      stroke-width: 3;
   }
`;

function IconWithHexes(props: IconProps) {
   const { name, classname } = props;

   return (
      <svg
         className={`${svg} ${classname}`}
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 96 96"
      >
         <title>{icons[name].title}</title>
         <g transform="translate(36, 36)">{icons[name].svg}</g>

         {SIZE_HEX.map((size) => (
            <Hexagon
               filter="url(#shadow)"
               key={size}
               cube={cube}
               originHex={origin}
               sizeHex={size}
            />
         ))}
      </svg>
   );
}

/**=================== Export ============================== */

export { Icon, IconWithHexes };
