import Lottie from 'lottie-react-web';
import animation from 'public/assets/bodymovin/data.json';

export function Introduction() {
   return (
      <Lottie
         options={{
            animationData: animation,
            loop: false,
         }}
         width="50%"
         height="50%"
         title="Welcome Cedric Gourville Developer"
         speed={1.5}
      />
   );
}
