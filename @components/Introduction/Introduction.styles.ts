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
   filter: drop-shadow(0 0 2px ${COLORS['black-200']});

   :global() {
      .home-stroke {
         stroke: ${COLORS['home-200']};
      }

      .home-fill {
         fill: ${COLORS['home-200']};
      }

      .about-stroke {
         stroke: ${COLORS['about-200']};
      }

      .about-fill {
         fill: ${COLORS['about-200']};
      }

      .works-stroke {
         stroke: ${COLORS['works-200']};
      }

      .works-fill {
         fill: ${COLORS['works-200']};
      }

      .contact-stroke {
         stroke: ${COLORS['contact-200']};
      }

      .contact-fill {
         fill: ${COLORS['contact-200']};
      }

      .neutral-stroke {
         stroke: ${COLORS['white-200']};
      }

      .neutral-fill {
         fill: ${COLORS['black-200']};
      }
   }
`;
