import Lottie from 'lottie-react-web';
import animation from 'public/assets/bodymovin/data.json';

export function Introduction() {
   return (
      <Lottie
         options={{
            animationData: animation,
            loop: false,
         }}
         title="Welcome Cedric Gourville Developer"
      />
   );
}
