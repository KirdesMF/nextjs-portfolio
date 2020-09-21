import React from 'react';

import style from './Header.style';

import ColorScheme from '@components/ColorScheme/ColorScheme';
import Menu from '@components/Menu/Menu';

function Header() {
   return (
      <header className={style.header}>
         <Menu area="menu" />
         <ColorScheme area="scheme" />
      </header>
   );
}

export default Header;
