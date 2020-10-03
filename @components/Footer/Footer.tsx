import { css } from 'linaria';

const footer = css`
   position: fixed;
   bottom: 0;

   height: 5%;
   width: 100%;
`;

export default function Footer() {
   return <footer className={footer}></footer>;
}
