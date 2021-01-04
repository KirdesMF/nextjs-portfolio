import Lottie from 'lottie-react';
import { useRouter } from 'next/router';
import animation from 'public/assets/bodymovin/data.json';

import * as styles from './Introduction.styles';

export function Introduction() {
   const router = useRouter();

   const goHome = () =>
      router.push({
         pathname: '/home',
      });

   return (
      <Lottie
         animationData={animation}
         className={styles.lottie}
         loop={false}
         rendererSettings={{
            progressiveLoad: true,
            hideOnTransparent: true,
            viewBoxOnly: true,
            className: styles.svg,
            focusable: false,
            title: 'introduction portfolio Ced Grvl',
         }}
         onComplete={goHome}
      />
   );
}
