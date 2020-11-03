import { Icon } from '@components/Icon/Icon';
import { NameIconType } from '@components/Icon/icons';
import { ReactNode } from 'react';
import * as styles from './SkillPanel.style';

type SkillPanelProps = {
   icons: NameIconType[];
   area: string;
   title: string;
   titleIcon: NameIconType;
};
export function SkillPanel(props: SkillPanelProps) {
   const { icons, area, title, titleIcon } = props;

   return (
      <article className={styles.container} style={{ gridArea: area }}>
         <Icon name={titleIcon} classname={styles.iconTitle} />
         <ul className={styles.list}>
            {icons.map((icon) => (
               <li key={icon}>
                  <Icon name={icon} classname={styles.icon} />
               </li>
            ))}
         </ul>
      </article>
   );
}
