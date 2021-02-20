import { css } from '@linaria/core';
import { COLORS } from 'Theme/colors';

export const lottie = css`
   width: 100%;
   height: 100%;

   z-index: 99;
   pointer-events: none;
`;

export const svg = css`
   width: 100%;
   height: 100%;
   filter: drop-shadow(0 0 2px ${COLORS.works});

   :global() {
      .home-stroke {
         stroke: ${COLORS.works};
      }

      .home-fill {
         fill: ${COLORS.works};
      }

      .about-stroke {
         stroke: ${COLORS.works};
      }

      .about-fill {
         fill: ${COLORS.works};
      }

      .works-stroke {
         stroke: ${COLORS.works};
      }

      .works-fill {
         fill: ${COLORS.works};
      }

      .contact-stroke {
         stroke: ${COLORS.works};
      }

      .contact-fill {
         fill: ${COLORS.works};
      }

      .neutral-stroke {
         stroke: ${COLORS.works};
      }

      .neutral-fill {
         fill: ${COLORS.works};
      }
   }
`;
