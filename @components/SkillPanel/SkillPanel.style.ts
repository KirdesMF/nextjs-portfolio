import { css } from '@linaria/core';
import { COLORS } from 'Theme/colors';
import { FONTS } from 'Theme/fonts';

export const container = css`
   position: relative;

   width: 70rem;
   height: 10rem;

   display: grid;

   box-shadow: 0px 0px 8px 3px ${COLORS['black-50']};
   overflow: hidden;
   border-radius: 10px;
   background: ${COLORS['about-200']};
`;

export const title = css`
   position: absolute;

   top: 0;
   left: 0;

   text-transform: uppercase;
   font-family: ${FONTS.amstelvar};
   font-size: 2rem;
   color: ${COLORS['about-100']};
`;

export const iconTitle = css`
   position: absolute;
   right: 2%;
   bottom: -40%;
   width: 10rem;
   transform: rotate(15deg);
   color: ${COLORS.background};
   opacity: 0.85;
   filter: url(#shadow-color);
`;

export const list = css`
   place-self: center;
   width: 80%;
   display: grid;
   grid-auto-flow: column;

   & > li {
      display: grid;
      place-items: center;
   }
`;

export const icon = css`
   width: 3rem;
   color: ${COLORS['about-300']};
   filter: url(#shadow-color);
`;
