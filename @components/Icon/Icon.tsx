import React from 'react';
import styled from 'styled-components';
import { ColorsType } from 'Theme/colors';
import { icons, NameIconType } from './icons';

type IconProps = {
   /**
    * Name of an Icon keep from {@link components/Icon/icons.tsx}
    */
   name: NameIconType;

   /**
    * A string wich contain a number and the unit width
    * e.g `'2vw'` `'5px'` etc.
    */
   width: string;

   /**
    * A color keep from {@link Theme/colors}
    */
   color: keyof ColorsType;

   /**
    * @remarks
    * optional
    *
    * A color keep from {@link Theme/colors}
    */
   hover?: keyof ColorsType;
   area?: string;
};
type SIconType = Omit<IconProps, 'name'>;

/**=================== Styled ============================== */
const SIcon = styled.svg<SIconType>`
   grid-area: ${(props) => props.area};
   transition: color 0.5s ease-in-out;
   width: ${(props) => props.width};
   color: ${(props) => props.theme.colors?.[props.color]};
   &:hover {
      color: ${(props) => props.hover && props.theme.colors?.[props.hover]};
   }
`;

/**=================== Component ============================== */
/**
 *
 * Component Icon
 * @param name - Icon's name
 * @param width - icon's width [vw, px, %]
 * @param  color - Icon's color [Restricted to theme colors]
 * @param  [hover] - [optional] Icon's color hover [Restricted to theme colors]
 * @param [area] - [optional] Place icon inside a grid.
 * @return  React.ReactNode
 * @remarks
 *  Example of usage :
 * ```ts
 * <Icon name="about" width="2vw" color="about" hover="active"/>
 * ```
 */
const Icon = ({ width, color, hover, name, area }: IconProps) => {
   return (
      <SIcon
         width={width}
         color={color}
         hover={hover}
         area={area}
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
