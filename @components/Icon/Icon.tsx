import { styled } from '@linaria/react';
import { icons, NameIconType } from './icons';

type SIconType = {
   size?: string;
   iconColor?: string;
   hover?: string;
   rotation?: string;
};

/**=================== Styled ============================== */
const SIcon = styled.svg<SIconType>`
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
   iconColor?: string;
   hover?: string;
   rotation?: string;
   classname?: string;
   filter?: 'url(#shadow)' | 'url(#dropShadow)';
};

function Icon(props: IconProps) {
   const { iconColor, hover, name, rotation, classname } = props;

   return (
      <SIcon
         className={classname}
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
}

export { Icon };
