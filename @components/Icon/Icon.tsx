import React from 'react';
import styled from 'styled-components';
import { TNameCOlors } from 'Theme/colors';
import { icons, NameIconType } from './icons';

type SIconType = {
   size: string;
   iconColor: TNameCOlors;
   hover: TNameCOlors;
   area: string;
   rotation: string;
};

/**=================== Styled ============================== */
const SIcon = styled.svg<SIconType>`
   grid-area: ${(props) => props.area};
   transition: color 0.5s ease-in-out;
   width: ${(props) => props.size};
   color: ${(props) => props.theme.colors?.[props.iconColor]};
   transform-origin: center;
   transform: ${(props) => props.rotation && `rotate(${props.rotation})`};

   @media (hover: hover) and (pointer: fine) {
      &:hover {
         color: ${(props) => props.hover && props.theme.colors?.[props.hover]};
      }
   }
`;

type IconProps = {
   /**
    * Name of an Icon keep from {@link components/Icon/icons.tsx}
    */
   name: NameIconType;

   /**
    * A string wich contain a number and the unit width
    * e.g `'2vw'` `'5px'` etc.
    */
   size: string;

   /**
    * A color keep from {@link Theme/colors}
    */
   iconColor: TNameCOlors;

   /**
    * @remarks
    * optional
    *
    * A color keep from {@link Theme/colors}
    */
   hover?: TNameCOlors;
   area?: string;
   rotation?: string;
};

/**=================== Component ============================== */
/**
 *
 * Component Icon
 * @param name - Icon's name
 * @param width - icon's width [vw, px, %]
 * @param  iconColor - Icon's color [Restricted to theme colors]
 * @param  [hover] - [optional] Icon's color hover [Restricted to theme colors]
 * @param [area] - [optional] Place icon inside a grid.
 * @return  React.ReactNode
 * @remarks
 *  Example of usage :
 * ```ts
 * <Icon name="about" width="2vw" color="about" hover="active"/>
 * ```
 */
const Icon = ({ size, iconColor, hover, name, area, rotation }: IconProps) => {
   return (
      <SIcon
         size={size}
         iconColor={iconColor}
         hover={hover!}
         area={area!}
         rotation={rotation!}
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
