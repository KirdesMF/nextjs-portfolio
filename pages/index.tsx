import { css } from 'linaria';

export default function Home() {
   return <div className={container}></div>;
}

const container = css`
   min-height: 100vh;
   background: red;
`;
