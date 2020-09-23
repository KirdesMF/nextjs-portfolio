import React from 'react';

import style from './Header.style';

import ColorScheme from '@components/ColorScheme/ColorScheme';
import Menu from '@components/Menu/Menu';

function Header() {
   return (
      <header className={style.header}>
         <Menu area="menu" />
         <h1 className={style.title}>
            &bull; Cédric Gourville &bull; Front developer &bull;
         </h1>
         <ColorScheme area="scheme" />
      </header>
   );
}

export default Header;
