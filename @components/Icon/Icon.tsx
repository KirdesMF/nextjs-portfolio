import React from 'react';
import { styled } from 'linaria/react';
import { icons, NameIconType } from './icons';
import { css } from 'linaria';

type SIconType = {
   size: string;
   iconColor: string;
   hover?: string;
   rotation?: string;
};

/**=================== Styled ============================== */
const SIcon = styled.svg<SIconType>`
   transition: color 0.5s ease-in-out;
   width: ${(props) => props.size};
   color: red;
   transform-origin: center;
   transform: ${(props) => `rotate(${props.rotation})`};

   @media (hover: hover) and (pointer: fine) {
      &:hover {
         color: blue;
      }
   }
`;

type IconProps = {
   name: NameIconType;
   size: string;
   iconColor: string;
   hover?: string;
   rotation?: string;
};

const Icon = ({ size, iconColor, hover, name, rotation }: IconProps) => {
   return (
      <SIcon
         size={size}
         iconColor={iconColor}
         hover={hover}
         rotation={rotation}
         viewBox="0 0 24 24"
         xmlns="http://www.w3.org/2000/svg"
      >
         <title>{icons[name].title}</title>
         {icons[name].svg}
      </SIcon>
   );
};

/**=================== Export ============================== */

export { Icon };

const svg = css`
   transition: color 0.5s ease-in-out;
   transform-origin: center;

   &[data-size='size'] {
   }

   @media (hover: hover) and (pointer: fine) {
      &:hover {
      }
   }
`;
