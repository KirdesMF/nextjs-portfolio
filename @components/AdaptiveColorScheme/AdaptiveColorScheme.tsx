import { ReturnedTheme } from '@adobe/leonardo-contrast-colors';
import useCanvasContext from 'context/CanvasContext';
import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react';
import theme from 'Theme/theme';
import { Utils } from 'utils/utils';
import { css } from 'linaria';
import { setCSSCustomProperties, getBackground } from './helpers-scheme';
import { Scheme } from './scheme';

type AdaptiveProps = {
   area: string;
};
function AdaptiveColorScheme({ area }: AdaptiveProps) {
   const { pathname } = useRouter();
   const { setColor } = useCanvasContext();

   const customPathname = Utils.customURL(pathname) as keyof typeof Scheme;

   const contrastRef = useRef<HTMLInputElement>(null!);
   const brightnessRef = useRef<HTMLInputElement>(null!);
   const darkRef = useRef<HTMLInputElement>(null!);
   const lightRef = useRef<HTMLInputElement>(null!);

   function setAdaptiveColors() {
      const brightnessInput = brightnessRef.current;
      const contrastInput = contrastRef.current;

      const brightnessValue = brightnessInput.valueAsNumber;
      const contrastValue = contrastInput.valueAsNumber;

      const Theme = Scheme[customPathname](
         brightnessValue,
         contrastValue
      ) as ReturnedTheme;

      setCSSCustomProperties(Theme);

      const background = getBackground(Theme);
      setColor(background);
   }

   function setMinMaxLight() {
      contrastRef.current.min = '0';
      contrastRef.current.max = '4';

      brightnessRef.current.min = '40';
      brightnessRef.current.max = '90';

      contrastRef.current.valueAsNumber = 2;
      brightnessRef.current.valueAsNumber = 65;
   }

   function setMinMaxDark() {
      contrastRef.current.min = '0';
      contrastRef.current.max = '8';

      brightnessRef.current.min = '0';
      brightnessRef.current.max = '40';

      contrastRef.current.valueAsNumber = 4;
      brightnessRef.current.valueAsNumber = 17.5;
   }

   function checkThemeAndMode() {
      const theme = localStorage.getItem('theme');

      if (theme && theme === 'dark') {
         darkRef.current.checked = true;
         setMinMaxDark();
      } else if (theme && theme === 'light') {
         lightRef.current.checked = true;
         setMinMaxLight();
      } else if (window.matchMedia(`(prefers-color-scheme: dark)`).matches) {
         darkRef.current.checked = true;
         setMinMaxDark();
      } else if (window.matchMedia(`(prefers-color-scheme: light)`).matches) {
         lightRef.current.checked = true;
         setMinMaxLight();
      }
   }

   function handleOnChangeRadioBtn(event: React.ChangeEvent<HTMLInputElement>) {
      if (event.currentTarget.id === 'light') {
         contrastRef.current.min = '0';
         contrastRef.current.max = '3';

         brightnessRef.current.min = '40';
         brightnessRef.current.max = '90';

         contrastRef.current.value = '1';
         brightnessRef.current.value = '65';

         localStorage.setItem('theme', 'light');
      }

      if (event.currentTarget.id === 'dark') {
         contrastRef.current.min = '0';
         contrastRef.current.max = '10';

         brightnessRef.current.min = '0';
         brightnessRef.current.max = '40';

         contrastRef.current.value = '4';
         brightnessRef.current.value = '17.5';

         localStorage.setItem('theme', 'dark');
      }

      setAdaptiveColors();
   }

   const debounceInput = Utils.debounce(setAdaptiveColors, 200);

   useEffect(() => {
      setAdaptiveColors();
   });

   useEffect(() => {
      checkThemeAndMode();
      setAdaptiveColors();
   }, []);

   return (
      <div className={wrapper} data-area={area}>
         <svg
            className={svg}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 29 29.6"
         >
            <g id="day">
               <path
                  fill="#74C0EB"
                  d="M21.6,14.6c0,3.6-2.9,6.6-6.5,6.7c-3.6,0-6.6-2.9-6.7-6.5"
               />
               <path
                  fill="#ACD591"
                  d="M12.4,18.9c-1.4,0-1.8,0.7-1.8,0.7s0,0,0,0c0.5,0.5,1.1,0.9,1.8,1.1C12.4,20.8,13.8,18.9,12.4,18.9z"
               />
               <path
                  fill="#ACD591"
                  d="M17.2,16.5c0.1,0.3,0.3,0.5,0.5,0.6c0.6,0.2,1.6-0.7,2.4-2.4l-3,0c0,0.3-0.1,0.7,0,1.1"
               />
            </g>
            <g id="clouds">
               <path
                  fill="#F4E5B1"
                  d="M8.7,22.5L8.7,22.5c0.1,0,0.1,0,0.1,0.1c0.4,0.3,0.9,0.3,1.2-0.1c0.2-0.3,0.3-0.7,0.1-1
            c0.1,0,0.2-0.1,0.3-0.2c0.2-0.2,0.2-0.6,0-0.9l0.1-0.1c0.2-0.2,0.2-0.6,0-0.8l-0.1-0.1c-0.2-0.2-0.6-0.2-0.8,0l-1.9,2.1
            c-0.2,0.2-0.2,0.6,0,0.8l0.1,0.1C8.2,22.8,8.5,22.8,8.7,22.5z"
               />
               <path
                  fill="#F4E5B1"
                  d="M20.8,23.3L20.8,23.3C20.8,23.3,20.8,23.3,20.8,23.3c0.4,0.3,0.8,0.3,1,0c0.2-0.2,0.2-0.5,0.1-0.7
            c0.1,0,0.2-0.1,0.2-0.1c0.2-0.2,0.2-0.5,0-0.6l0-0.1c0.1-0.2,0.1-0.4,0-0.6l-0.1,0c-0.2-0.1-0.4-0.1-0.6,0l-1.4,1.6
            c-0.1,0.2-0.1,0.4,0,0.6l0.1,0C20.4,23.5,20.6,23.5,20.8,23.3z"
               />
               <path
                  fill="#F4E5B1"
                  d="M18.3,18.1L18.3,18.1c0.1,0,0.1,0,0.1,0.1c0.4,0.3,0.9,0.3,1.2-0.1c0.2-0.3,0.3-0.6,0.1-0.9
            c0.1,0,0.2-0.1,0.3-0.2c0.2-0.2,0.2-0.6,0-0.8l0.1-0.1c0.2-0.2,0.2-0.6,0-0.8l-0.1-0.1c-0.2-0.2-0.6-0.2-0.8,0l-1.8,2.1
            c-0.2,0.2-0.2,0.6,0,0.8l0.1,0.1C17.8,18.4,18.1,18.3,18.3,18.1z"
               />
            </g>
            <g id="night">
               <path
                  fill="#676AB1"
                  d="M8.4,14.8c0-3.6,2.9-6.6,6.5-6.7c3.6,0,6.6,2.9,6.7,6.5"
               />
               <path
                  fill="#9896CA"
                  d="M9.7,14.7c0.4-1.4,0.8-3,1.3-2.7c0.8,0.5,2,0.7,1.7,2.6L9.7,14.7z"
               />
               <path
                  fill="#9896CA"
                  d="M16.3,9.6c0.8-0.3,1.7-0.6,1.5-0.9c-0.3-0.1-1-0.4-1.3-0.4C16.5,8.3,15.5,10,16.3,9.6z"
               />
            </g>
            <g id="stars">
               <circle fill="#FCEE21" cx="7.2" cy="12.9" r="0.5" />
               <circle fill="#FCEE21" cx="18.8" cy="12.5" r="0.3" />
               <circle fill="#FCEE21" cx="7.7" cy="7.2" r="0.3" />
               <circle fill="#FCEE21" cx="14.2" cy="13.6" r="0.4" />
               <circle fill="#FCEE21" cx="17.7" cy="10" r="0.3" />
               <circle fill="#FCEE21" cx="17.7" cy="7.3" r="0.1" />
               <circle fill="#FCEE21" cx="10.9" cy="10.9" r="0.3" />
            </g>
            <g id="line">
               <line
                  fill="none"
                  stroke="#000000"
                  strokeWidth="0.4845"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  x1="26.5"
                  y1="14.6"
                  x2="3.4"
                  y2="14.9"
               />
            </g>
            <g id="sun">
               <path
                  fill="#F7931E"
                  d="M19.8,21.1c0-0.1,0-0.1,0-0.2c-0.2-0.2-0.3-0.4-0.4-0.7s-0.1-0.5-0.1-0.8c0-0.1,0-0.1-0.1-0.1
            c-0.3-0.1-0.5-0.2-0.7-0.4c-0.2-0.2-0.4-0.4-0.4-0.7c0-0.1-0.1-0.1-0.2-0.1c-0.2,0.1-0.5,0.1-0.8,0s-0.5-0.2-0.7-0.4
            c-0.1,0-0.1,0-0.2,0c-0.2,0.2-0.4,0.3-0.7,0.4c-0.3,0.1-0.5,0.1-0.8,0.1c-0.1,0-0.1,0-0.1,0.1c-0.1,0.3-0.2,0.5-0.4,0.7
            c-0.2,0.2-0.4,0.4-0.7,0.4c-0.1,0-0.1,0.1-0.1,0.2c0.1,0.2,0.1,0.5,0,0.8c-0.1,0.3-0.2,0.5-0.4,0.7c0,0.1,0,0.1,0,0.2
            c0.2,0.2,0.3,0.4,0.4,0.7c0.1,0.3,0.1,0.5,0.1,0.8c0,0.1,0,0.1,0.1,0.1c0.3,0.1,0.5,0.2,0.7,0.4c0.2,0.2,0.4,0.4,0.4,0.7
            c0,0.1,0.1,0.1,0.2,0.1c0.2-0.1,0.5-0.1,0.8,0s0.5,0.2,0.7,0.4c0.1,0,0.1,0,0.2,0c0.2-0.2,0.4-0.3,0.7-0.4
            c0.3-0.1,0.5-0.1,0.8-0.1c0.1,0,0.1,0,0.1-0.1c0.1-0.3,0.2-0.5,0.4-0.7c0.2-0.2,0.4-0.4,0.7-0.4c0.1,0,0.1-0.1,0.1-0.2
            c-0.1-0.2-0.1-0.5,0-0.8C19.5,21.5,19.7,21.3,19.8,21.1z"
               />
               <circle fill="#FCEE21" cx="16.5" cy="21.2" r="1.9" />
            </g>
            <g id="moon">
               <path
                  fill="#F4E5B1"
                  d="M12.5,8.2c-1.6-0.2-2.9-1.3-3.2-2.8C9.2,5.7,9.1,6,9.1,6.4c-0.2,2,1.3,3.7,3.2,3.9c2,0.2,3.7-1.3,3.9-3.2
         c0-0.4,0-0.7-0.1-1C15.5,7.5,14.1,8.4,12.5,8.2z"
               />
            </g>
         </svg>

         <label className={label} htmlFor="brightness">
            <p>B</p>
            <input
               ref={brightnessRef}
               onChange={debounceInput}
               type="range"
               id="brightness"
               step={1}
            />
         </label>

         <label className={label} htmlFor="contrast">
            <p>C</p>
            <input
               ref={contrastRef}
               onChange={debounceInput}
               type="range"
               id="contrast"
               step={0.1}
            />
         </label>

         <label className={label} htmlFor="light">
            <p>Light</p>
            <input
               onChange={handleOnChangeRadioBtn}
               ref={lightRef}
               type="radio"
               name="mode"
               id="light"
            />
         </label>

         <label className={label} htmlFor="dark">
            <p>Dark</p>
            <input
               onChange={handleOnChangeRadioBtn}
               ref={darkRef}
               type="radio"
               name="mode"
               id="dark"
            />
         </label>
      </div>
   );
}
export default AdaptiveColorScheme;

// Style
const wrapper = css`
   display: grid;

   width: 100%;
   height: 100%;

   padding: 1em 0.5em;

   grid-template-columns: 1.2fr 1fr 1fr;
   grid-template-rows: repeat(2, 1fr);

   grid-gap: 0.5em;

   background: transparent;
   /* box-shadow: ${theme.SHADOWS['--box-big']} ${theme.COLORS['grey-200']}; */
`;

const label = css`
   display: flex;
   align-items: center;
   justify-content: space-around;

   & > p {
      font-size: 0.5em;
      font-family: 'Decovar';
   }

   &[for='brightness'] {
      grid-column: 2/3;
      grid-row: 1/2;
   }

   &[for='contrast'] {
      grid-column: 2/3;
      grid-row: 2/3;
   }

   &[for='dark'] {
      grid-column: 3/4;
      grid-row: 1/2;
   }

   &[for='light'] {
      grid-column: 3/4;
      grid-row: 2/3;
   }
`;

const svg = css`
   --sun: calc(-45deg - 90deg);
   --moon: 45deg;

   width: 100%;
   height: 100%;
   grid-column: 1/2;
   grid-row: 1/3;

   transform: rotate(var(--sun));

   g#moon,
   g#night,
   g#stars {
      opacity: 0.2;
   }
`;
