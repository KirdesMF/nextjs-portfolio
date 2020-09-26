import { css } from 'linaria';
import React from 'react';
import THEME from 'Theme/theme';

const section = css`
   height: 100%;
   width: 100%;

   background: ${THEME.COLORS.background};
`;
export default function Skills() {
   return <div className={section}></div>;
}
