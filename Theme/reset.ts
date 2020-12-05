import { css } from 'linaria';

export const reset = css`
   :global() {
      html {
         box-sizing: border-box;
      }

      *,
      *:before,
      *:after {
         box-sizing: inherit;
         transition: color 1s ease-in-out -0.5s, fill 1s ease-in-out -0.5s,
            stroke 1s ease-in-out -0.5s, background 1s ease-in-out -0.5s,
            border-color 1s ease-in-out -0.5s, box-shadow 1s ease-in-out -0.5s;
      }

      html,
      body {
         margin: 0;
         padding: 0;

         height: 100%;
         background: black;
      }

      body > * {
         height: inherit;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
         margin: 0;
         padding: 0;
      }

      ul,
      li {
         list-style: none;
         padding: 0;
         margin: 0;
      }

      a {
         text-decoration: none;
         cursor: pointer;
      }

      button {
         padding: 0;
         border: none;
         font: inherit;
         color: inherit;
         background-color: transparent;
         cursor: default;
      }

      button:focus {
         outline: 1px solid grey;
      }
   }
`;
