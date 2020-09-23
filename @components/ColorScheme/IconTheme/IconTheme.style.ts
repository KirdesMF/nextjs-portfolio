import { css } from 'linaria';
import THEME from 'Theme/theme';

const svg = css`
   width: 5em;
   filter: drop-shadow(0 0 5px ${THEME.COLORS['grey-100']});
   transition: transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

   &:hover,
   &:focus {
      transform: scale(1.05) rotate(10deg);
   }
`;

export default {
   svg,
};
