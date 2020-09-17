import { css } from 'linaria';
import theme from 'Theme/theme';

export const svg = css`
   width: 100%;
   filter: drop-shadow(0 0 5px ${theme.COLORS['grey-100']});
`;
