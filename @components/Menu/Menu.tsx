import React, { useState } from 'react';
import ButtonMenu from './ButtonMenu/ButtonMenu';
import NavMenu from './NavMenu/NavMenu';

type MenuProps = {
   area: string;
};
function Menu({ area }: MenuProps) {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <React.Fragment>
         <ButtonMenu isOpen={isOpen} setIsOpen={setIsOpen} area={area} />
         <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </React.Fragment>
   );
}

export default Menu;
