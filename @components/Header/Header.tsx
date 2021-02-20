import { Menu } from '@components/Menu/Menu';
import { SwitchLanguage } from '@components/SwitchLanguage/SwitchLanguage';
import { SwitchTheme } from '@components/SwitchTheme/SwitchTheme';
import { css } from '@linaria/core';
import { BREAKPOINTS } from 'Theme/breakpoints';

export function Header() {
   return (
      <header className={header}>
         <Menu />
         <section className={settings}>
            <SwitchLanguage />
            <SwitchTheme />
         </section>
      </header>
   );
}

const settings = css`
   display: grid;
   place-items: center;

   grid-auto-flow: column;
   column-gap: 2rem;
`;

const header = css`
   /** Mobile */
   position: fixed;
   z-index: 1;
   bottom: 0;

   width: 100%;
   height: var(--height-header);

   display: flex;
   justify-content: space-between;
   padding: 0 2rem;

   /** Desktop */
   @media screen and (min-width: ${BREAKPOINTS.large}) {
      top: 0;
      bottom: unset;
   }
`;
