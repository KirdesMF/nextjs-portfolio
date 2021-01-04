import { Icon } from '@components/Icon/Icon';

import * as styles from './LinkContact.styles';

export function LinkContact() {
   return (
      <nav className={styles.container}>
         <a href="/" className={styles.anchor}>
            <span className={styles.span}>twitter</span>
            <Icon name="twitter" classname={styles.icon} />
         </a>

         <a href="/" className={styles.anchor}>
            <span className={styles.span}>github</span>
            <Icon name="github" classname={styles.icon} />
         </a>

         <a href="/" className={styles.anchor}>
            <span className={styles.span}>linkedin</span>
            <Icon name="linkedin" classname={styles.icon} />
         </a>

         <a href="/" className={styles.anchor}>
            <span className={styles.span}>mail</span>
            <Icon name="mail" classname={styles.icon} />
         </a>
      </nav>
   );
}
