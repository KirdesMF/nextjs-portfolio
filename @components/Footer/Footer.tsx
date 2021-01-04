import { css } from '@linaria/core';

const footer = css`
   position: fixed;
   bottom: 0;

   height: 5%;
   width: 100%;
`;

export function Footer() {
   return <footer className={footer}></footer>;
}
