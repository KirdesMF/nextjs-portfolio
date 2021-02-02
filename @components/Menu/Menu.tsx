import { useState } from 'react';
import { ButtonMenu } from './ButtonMenu/ButtonMenu';
import { NavMenu } from './NavMenu/NavMenu';

export function Menu() {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <>
         <ButtonMenu isOpen={isOpen} setIsOpen={setIsOpen} />
         <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </>
   );
}
