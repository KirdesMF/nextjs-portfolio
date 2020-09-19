import { css } from 'linaria';
import THEME from 'Theme/theme';

export const svg = css`
   width: 5em;
   filter: drop-shadow(0 0 5px ${THEME.COLORS['grey-100']});
`;
