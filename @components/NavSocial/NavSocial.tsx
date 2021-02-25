import { Icon } from '@components/Icon/Icon';
import { NameIconType } from '@components/Icon/icons';
import { css } from '@linaria/core';
import { COLORS } from 'Theme/colors';

type Social = {
   name: NameIconType;
   href: string;
};
const SOCIAL: Social[] = [
   { name: 'github', href: '' },
   { name: 'linkedin', href: '' },
   { name: 'twitter', href: '' },
];

export function NavSocial() {
   return (
      <nav className={nav}>
         {SOCIAL.map(({ name, href }, index) => (
            <a key={name} href={href}>
               {name}
            </a>
         ))}
      </nav>
   );
}

const nav = css`
   display: grid;
   place-items: center;
   row-gap: 1rem;

   & > a {
      font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
      color: ${COLORS.text};
   }
`;
