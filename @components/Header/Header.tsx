import ColorScheme from '@components/ColorScheme/ColorScheme';
import Menu from '@components/Menu/Menu';
import React from 'react';
import * as style from './Header.style';

function Header() {
   return (
      <header className={style.header}>
         <Menu area="menu" />
         <ColorScheme area="scheme" />
      </header>
   );
}

export default Header;
