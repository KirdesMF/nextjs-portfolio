import { ColorScheme } from '@components/ColorScheme/ColorScheme';
import { Menu } from '@components/Menu/Menu';
import { useRouter } from 'next/router';

import * as styles from './Header.styles';

export function Header() {
   const router = useRouter();
   const { locale, query, pathname } = router;

   const changeLanguage = () => {
      router.push(`${pathname}`, `${pathname}`, {
         locale: locale === 'fr' ? 'en-US' : 'fr',
      });
   };
   return (
      <header className={styles.header}>
         <Menu />
         <button
            style={{ height: '8rem', width: '15rem' }}
            onClick={changeLanguage}
         >
            {locale}
         </button>
         <ColorScheme />
      </header>
   );
}
