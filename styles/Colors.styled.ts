import { createGlobalStyle } from 'styled-components';

const Colors = createGlobalStyle`

   :root{
      --h-home: 250;
      --s-home: 50%;
      --l-home: 40%;
      --color-home: hsl(var(--h-home), var(--s-home), var(--l-home));

      --h-about: 120;
      --s-about: 50%;
      --l-about: 40%;
      --color-about: hsl(var(--h-about), var(--s-about), var(--l-about));

      --h-works: 90;
      --s-works: 50%;
      --l-works: 40%;
      --color-works: hsl(var(--h-works), var(--s-works), var(--l-works));

      --h-contact: 200;
      --s-contact: 50%;
      --l-contact: 40%;
      --color-contact: hsl(var(--h-contact), var(--s-contact), var(--l-contact));

      --color-black: hsla(250, 10%, 10%);
      --color-inset-black: hsla(250, 10%, 10%, .4);
      --color-white: hsl(0, 100%, 100%);
   }

   [data-theme='dark']{
      --l-home: 10%;
      --l-works: 10%;
   }
`;

export default Colors;
