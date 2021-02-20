import { css } from '@linaria/core';
import { BREAKPOINTS } from 'Theme/breakpoints';
import { COLORS } from 'Theme/colors';

export const nav = css`
   display: none;

   @media screen and (min-width: ${BREAKPOINTS.large}) {
      position: fixed;
      z-index: 20;
      left: 0;
      top: 50%;
      transform: translateY(-50%);

      height: 12rem;
      width: 6rem;

      display: grid;
      row-gap: 1rem;
      place-items: center;
   }
`;

export const anchor = css`
   --size: 20px;

   position: relative;
   height: var(--size);
   width: var(--size);

   border-radius: 50%;
   box-shadow: 0px 0px 5px ${COLORS.text};

   &[href*='/home'] {
      background-color: ${COLORS.home};
   }

   &[href*='/about'] {
      background-color: ${COLORS.about};
   }

   &[href*='/works'] {
      background-color: ${COLORS.works};
   }

   &[href*='/contact'] {
      background-color: ${COLORS.contact};
   }
`;

export const span = css`
   --position: -8px;
   position: absolute;
   top: var(--position);
   bottom: var(--position);
   left: var(--position);
   right: var(--position);

   border: 3px solid ${COLORS.home};
   border-radius: 50%;
`;
