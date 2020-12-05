import { css } from 'linaria';
import Lottie from 'lottie-react';
import { useRouter } from 'next/router';
import animation from 'public/assets/bodymovin/data.json';
import { useEffect } from 'react';

const colors = css`
   width: 100%;
   height: 100%;
   display: grid;
`;

const svg = css`
   width: 100%;
   height: 100%;

   :global() {
      .intro_stroke_home {
         stroke: pink;
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
