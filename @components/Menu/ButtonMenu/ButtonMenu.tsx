import React, { useEffect } from 'react';
import { SButtonMenu } from './ButtonMenu.styled';
import { Hexagon } from '@components/Hexagon/Hexagon.styled';
import { useAnimation } from 'framer-motion';
import { menuSettings } from './ButtonMenu.variants';
import { CSSVAR } from '@components/ColorScheme/ColorScheme';
import { useRouter } from 'next/router';

type TButtonMenu = {
   isOpen: boolean;
   setIsOpen: (value: React.SetStateAction<boolean>) => void;
};

function ButtonMenu({ isOpen, setIsOpen }: TButtonMenu) {
   const { VIEWBOX, ORIGIN, burger, hexes } = menuSettings;
   const { HEXMAP, HEX_SIZE, hexesMenuVariants } = hexes;
   const { topPathVariants, midPathVariants, botPathVariants } = burger;

   const router = useRouter();
   const controls = useAnimation();

   const hexesAnimation = {
      onTap: () => controls.start('onTap'),
      onHoverStart: () => controls.start('onHoverStart'),
      onHoverEnd: () => controls.start('onHoverEnd'),
   };

   useEffect(() => {
      controls.start('onHoverEnd');
   }, [router.pathname]);

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
                        color: 'var(--background)',
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
export default ButtonMenu;
