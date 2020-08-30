import React from 'react';
import { SButtonMenu } from './ButtonMenu.styled';
import { Hexagon } from '@components/Hexagon/Hexagon.styled';
import { useAnimation } from 'framer-motion';
import { menuSettings } from './ButtonMenu.variants';
import { Utils } from 'utils/utils';

type TButtonMenu = {
   isOpen: boolean;
   setIsOpen: (value: React.SetStateAction<boolean>) => void;
};

export default function ButtonMenu({ isOpen, setIsOpen }: TButtonMenu) {
   const { VIEWBOX, ORIGIN, burger, hexes } = menuSettings;
   const { HEXMAP, HEX_SIZE, hexesMenuVariants } = hexes;
   const { topPathVariants, midPathVariants, botPathVariants } = burger;
   const randomColor = `hsl(10, 60%, 35%)`;

   const controls = useAnimation();

   const hexesAnimation = {
      onTap: () => controls.start('onTap'),
      onHoverStart: () => controls.start('onHoverStart'),
      onHoverEnd: () => controls.start('onHoverEnd'),
   };

   return (
      <SButtonMenu.Button onClick={() => setIsOpen((prev) => !prev)}>
         <SButtonMenu.Svg
            viewBox={VIEWBOX}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            preserveAspectRatio="xMidYMid"
            initial="initial"
            animate={controls}
            {...hexesAnimation}
         >
            {HEXMAP.map((hex, i) => {
               return (
                  <Hexagon
                     key={i}
                     custom={i}
                     variants={hexesMenuVariants({
                        delay: i,
                        isOpen: isOpen,
                        color: randomColor,
                     })}
                     originHex={ORIGIN}
                     sizeHex={HEX_SIZE}
                     cube={hex}
                  />
               );
            })}
            <SButtonMenu.Path
               variants={topPathVariants}
               animate={isOpen ? 'open' : 'closed'}
               initial="initial"
            />

            <SButtonMenu.Path
               variants={midPathVariants}
               animate={isOpen ? 'open' : 'closed'}
               initial="initial"
            />
            <SButtonMenu.Path
               variants={botPathVariants}
               animate={isOpen ? 'open' : 'closed'}
               initial="initial"
            />
         </SButtonMenu.Svg>
      </SButtonMenu.Button>
   );
}
