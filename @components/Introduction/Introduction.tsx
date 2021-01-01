import { css } from 'linaria';
import Lottie from 'lottie-react';
import { useRouter } from 'next/router';
import animation from 'public/assets/bodymovin/data.json';
import { useEffect } from 'react';
import THEME from 'Theme/theme';

const colors = css`
   width: 100%;
   height: 100%;
   display: grid;

   z-index: 99;
   pointer-events: none;
`;

const svg = css`
   width: 100%;
   height: 100%;
   filter: drop-shadow(0 0 0.75rem black);

   :global() {
      .home-stroke,
      .home-fill {
         stroke: ${THEME.COLORS['secondary-700']};
         fill: ${THEME.COLORS['secondary-700']};
      }

      .about-stroke,
      .about-fill {
         stroke: ${THEME.COLORS['secondary-700']};
         fill: ${THEME.COLORS['secondary-700']};
      }

      .works-stroke,
      .works-fill {
         stroke: ${THEME.COLORS['tertiary-200']};
         fill: ${THEME.COLORS['tertiary-200']};
      }

      .contact-stroke,
      .contact-fill {
         stroke: ${THEME.COLORS['tertiary-200']};
         fill: ${THEME.COLORS['tertiary-200']};
      }

      .neutral-stroke,
      .neutral-fill {
         stroke: ${THEME.COLORS['grey-400']};
         fill: ${THEME.COLORS['grey-400']};
      }
   }
`;

export function Introduction() {
   const router = useRouter();

   const goHome = () =>
      router.push({
         pathname: '/home',
      });

   return (
      <Lottie
         animationData={animation}
         className={colors}
         loop={false}
         rendererSettings={{
            progressiveLoad: true,
            hideOnTransparent: true,
            viewBoxOnly: true,
            className: svg,
            focusable: false,
            title: 'introduction portfolio Ced Grvl',
         }}
         onComplete={goHome}
      />
   );
}
