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
         <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} />
         <ButtonMenu isOpen={isOpen} setIsOpen={setIsOpen} area={area} />
      </React.Fragment>
   );
}

export default Menu;
