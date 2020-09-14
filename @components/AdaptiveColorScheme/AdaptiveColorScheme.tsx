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
         <svg className={svg}></svg>
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
   width: 100%;
   height: 100%;
   grid-column: 1/2;
   grid-row: 1/3;
`;
