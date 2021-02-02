import { ColorScheme } from '@components/ColorScheme/ColorScheme';
import { Menu } from '@components/Menu/Menu';

import * as styles from './Header.styles';

export function Header() {
   return (
      <header className={styles.header}>
         <Menu />
         <ColorScheme />
      </header>
   );
}
