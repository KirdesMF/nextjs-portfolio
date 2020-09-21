import React from 'react';
import { styled } from 'linaria/react';
import { icons, NameIconType } from './icons';

type SIconType = {
   size: string;
   iconColor: string;
   hover?: string;
   rotation?: string;
};

/**=================== Styled ============================== */
const SIcon = styled.svg<SIconType>`
   width: ${(props) => props.size};
   color: ${(props) => props.iconColor};
   transform-origin: center;
   transform: ${(props) => `rotate(${props.rotation})`};

   @media (hover: hover) and (pointer: fine) {
      &:hover {
         color: ${(props) => props.hover!};
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

const Icon = ({
   size,
   iconColor,
   hover = 'black',
   name,
   rotation = '0',
}: IconProps) => {
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
