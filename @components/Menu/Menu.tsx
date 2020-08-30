import React, { useState, useContext, useEffect } from 'react';
import { SMenu } from './Menu.styled';
import { ThemeContext } from 'styled-components';
import ButtonMenu from './ButtonMenu/ButtonMenu';

type TMenuProps = {
   pathname: string;
};

export default function Menu({ pathname }: TMenuProps) {
   const { colors } = useContext(ThemeContext);

   const [isOpen, setIsOpen] = useState(false);
   const [colorAnimation, setColorAnimation] = useState({
      random: colors.black,
      color: colors.black,
   });

   useEffect(() => {
      setColorAnimation({
         random: '',
         color: colors[pathname],
      });
   }, [pathname]);

   //TODO ANIMATION need refactoring

   // Render
   return (
      <>
         <ButtonMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </>
   );
}
