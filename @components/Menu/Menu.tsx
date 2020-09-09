import React, { useState, useContext, useEffect } from 'react';
import ButtonMenu from './ButtonMenu/ButtonMenu';
import NavMenu from './NavMenu/NavMenu';
import { ColorName } from 'Theme/colors';

type TMenuProps = {
   pathname: ColorName;
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
