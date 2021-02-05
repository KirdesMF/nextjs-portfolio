import Lottie from 'lottie-react';
import { useRouter } from 'next/router';

import * as styles from './Introduction.styles';

export function Introduction({
   title,
   animationData,
}: {
   title?: string;
   animationData: Record<string, unknown>;
}) {
   const router = useRouter();

   const goHome = () =>
      router.push({
         pathname: '/home',
      });

   return (
      <Lottie
         animationData={animationData}
         className={styles.lottie}
         loop={false}
         rendererSettings={{
            hideOnTransparent: true,
            viewBoxOnly: true,
            className: styles.svg,
            focusable: false,
            title: title,
         }}
         onComplete={goHome}
      />
   );
}
