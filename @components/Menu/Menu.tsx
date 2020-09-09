import React, { useState, useContext, useEffect } from 'react';
import { SMenu } from './Menu.styled';
import { ThemeContext } from 'styled-components';
import ButtonMenu from './ButtonMenu/ButtonMenu';
import NavMenu from './NavMenu/NavMenu';
import { KeyColorsType } from '_types/styled';

type TMenuProps = {
   pathname: KeyColorsType;
};

export default function Menu({ pathname }: TMenuProps) {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <>
         <ButtonMenu
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            pathname={pathname}
         />
         <NavMenu pathname={pathname} isOpen={isOpen} setIsOpen={setIsOpen} />
      </>
   );
}
