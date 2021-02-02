import { css } from '@linaria/core';
import { COLORS } from 'Theme/colors';

export const nav = css`
   position: fixed;
   z-index: 20;
   left: 0;
   top: 50%;
   transform: translateY(-50%);

   height: 200px;
   width: 100px;

   display: grid;
   row-gap: 1rem;
   place-items: center;
`;

export const anchor = css`
   --size: 20px;

   position: relative;
   height: var(--size);
   width: var(--size);

   border-radius: 50%;
   box-shadow: 0px 0px 5px ${COLORS['black-25']};

   &[href='/home'] {
      background-color: ${COLORS['home-200']};
   }

   &[href='/about'] {
      background-color: ${COLORS['about-200']};
   }

   &[href='/works'] {
      background-color: ${COLORS['works-200']};
   }

   &[href='/contact'] {
      background-color: ${COLORS['contact-200']};
   }
`;

export const span = css`
   --position: -8px;
   position: absolute;
   top: var(--position);
   bottom: var(--position);
   left: var(--position);
   right: var(--position);

   border: 3px solid ${COLORS.background};
   border-radius: 50%;
`;
