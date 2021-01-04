import { css } from '@linaria/core';
import { COLORS } from 'Theme/colors';

export const lottie = css`
   width: 100%;
   height: 100%;
   display: grid;

   z-index: 99;
   pointer-events: none;
`;

export const svg = css`
   width: 100%;
   height: 100%;
   filter: drop-shadow(0 0 0.75rem black);

   :global() {
      .home-stroke,
      .home-fill {
         stroke: ${COLORS['home-100']};
         fill: ${COLORS['home-100']};
      }

      .about-stroke,
      .about-fill {
         stroke: ${COLORS['about-100']};
         fill: ${COLORS['about-100']};
      }

      .works-stroke,
      .works-fill {
         stroke: ${COLORS['works-100']};
         fill: ${COLORS['works-100']};
      }

      .contact-stroke,
      .contact-fill {
         stroke: ${COLORS['contact-100']};
         fill: ${COLORS['contact-100']};
      }

      .neutral-stroke,
      .neutral-fill {
         stroke: ${COLORS['white-100']};
         fill: ${COLORS['black-100']};
      }
   }
`;
