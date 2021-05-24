import { Menu } from '@components/Menu/Menu';
import * as styles from './header.css';

export function Header() {
   return (
      <header data-col="main" className={styles.header}>
         <Menu />
      </header>
   );
}
