import React from 'react';
import { styled } from 'linaria/react';
import { icons, NameIconType } from './icons';

type SIconType = {
   size?: string;
   iconColor?: string;
   hover?: string;
   rotation?: string;
};

/**=================== Styled ============================== */
const SIcon = styled.svg<SIconType>`
   width: ${(props) => props.size || '1em'};
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
};

const Icon = ({
   size,
   iconColor,
   hover,
   name,
   rotation,
   classname,
}: IconProps) => {
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
};

/**=================== Export ============================== */

export { Icon };
