import { ReturnedTheme } from '@adobe/leonardo-contrast-colors';
import useCanvasContext from 'context/CanvasContext';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import theme from 'Theme/theme';
import { Utils } from 'utils/utils';
import { css } from 'linaria';
import { setCSSCustomProperties, getBackground } from './helpers-scheme';
import { Scheme } from './scheme';
import { motion, Variants } from 'framer-motion';
import SvgDarkTheme from './SvgDarkTheme';

type AdaptiveProps = {
   area: string;
};

type Theme = 'light' | 'dark' | string;

function AdaptiveColorScheme({ area }: AdaptiveProps) {
   const { pathname } = useRouter();
   const { setColor } = useCanvasContext();

   const customPathname = Utils.customURL(pathname) as keyof typeof Scheme;

   const contrastRef = useRef<HTMLInputElement>(null!);
   const brightnessRef = useRef<HTMLInputElement>(null!);
   const darkRef = useRef<HTMLInputElement>(null!);
   const lightRef = useRef<HTMLInputElement>(null!);

   const [theme, setTheme] = useState<Theme>('light');

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
         setTheme('light');
      }

      if (event.currentTarget.id === 'dark') {
         contrastRef.current.min = '0';
         contrastRef.current.max = '10';

         brightnessRef.current.min = '0';
         brightnessRef.current.max = '40';

         contrastRef.current.value = '4';
         brightnessRef.current.value = '17.5';

         localStorage.setItem('theme', 'dark');
         setTheme('dark');
      }

      setAdaptiveColors();
   }

   const debounceInput = Utils.debounce(setAdaptiveColors, 200);

   useEffect(() => {
      setAdaptiveColors();
   });

   useEffect(() => {
      setTheme(localStorage.getItem('theme')!);
      checkThemeAndMode();
      setAdaptiveColors();
   }, []);

   return (
      <section className={adaptive} data-area={area}>
         <SvgDarkTheme theme={theme} />

         <article className={mode}>
            <label htmlFor="light" className={labelRadioBtn} data-area="light">
               Light
            </label>
            <input
               tabIndex={0}
               id="light"
               className={inputRadioBtn}
               data-area="light"
               onChange={handleOnChangeRadioBtn}
               ref={lightRef}
               type="radio"
               name="mode"
            />

            <label htmlFor="dark" className={labelRadioBtn} data-area="dark">
               Dark
            </label>
            <input
               tabIndex={0}
               id="dark"
               className={inputRadioBtn}
               data-area="dark"
               type="radio"
               name="mode"
               onChange={handleOnChangeRadioBtn}
               ref={darkRef}
            />

            <svg
               className={svgCircle}
               data-area="dark"
               version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24"
               aria-hidden="true"
               focusable="false"
            >
               <circle
                  className={circle}
                  data-circle="fill"
                  cy="12"
                  cx="12"
                  r="3"
               ></circle>
               <circle
                  className={circle}
                  data-circle="stroke"
                  cy="12"
                  cx="12"
                  r="7"
               ></circle>
            </svg>

            <svg
               className={svgCircle}
               data-area="light"
               version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24"
               aria-hidden="true"
               focusable="false"
            >
               <circle
                  className={circle}
                  data-circle="fill"
                  cy="12"
                  cx="12"
                  r="3"
               ></circle>
               <circle
                  className={circle}
                  data-circle="stroke"
                  cy="12"
                  cx="12"
                  r="7"
               ></circle>
            </svg>
         </article>

         <article className={rangeSlider}>
            <label htmlFor="brightness">B</label>
            <input
               type="range"
               id="brightness"
               step={1}
               tabIndex={0}
               name="brightness"
               ref={brightnessRef}
               onChange={debounceInput}
            />
            <label htmlFor="contrast">C</label>
            <input
               tabIndex={0}
               name="contrast"
               ref={contrastRef}
               onChange={debounceInput}
               type="range"
               id="contrast"
               step={0.1}
            />
         </article>
      </section>
   );
}
export default AdaptiveColorScheme;

// Style
const adaptive = css`
   display: grid;
   grid-template:
      'svg radios sliders' 1fr
      /0.5fr 1fr 1fr;

   background: transparent;
`;

const mode = css`
   grid-area: radios;

   display: grid;
   grid-template:
      'radio-light label-light' 1fr
      'radio-dark label-dark' 1fr
      / 0.7fr 1fr;
   place-items: center;

   padding: 1.5em 2em 1.5em 0;
`;

const labelRadioBtn = css`
   cursor: pointer;
   font-size: 0.6em;
   font-family: 'Decovar';
   color: ${theme.COLORS['grey-200']};

   &[data-area='dark'] {
      grid-area: label-dark;
   }

   &[data-area='light'] {
      grid-area: label-light;
   }
`;

const inputRadioBtn = css`
   cursor: pointer;

   opacity: 0;
   width: 1em;
   height: 1em;

   &[data-area='dark'] {
      grid-area: radio-dark;
   }

   &[data-area='light'] {
      grid-area: radio-light;
   }
`;

const svgCircle = css`
   width: 1em;
   height: 1em;

   transform-origin: center;
   transform-box: fill-box;
   grid-column: 1/2;

   transition: all 1s ease;

   &[data-area='dark'] {
      grid-row: radio-dark;
   }

   &[data-area='light'] {
      grid-row: radio-light;
   }
`;

const circle = css`
   filter: drop-shadow(0 0 2px ${theme.COLORS['grey-100']});

   &[data-circle='fill'] {
      fill: black;
      stroke: none;
   }

   &[data-circle='stroke'] {
      fill: none;
      stroke: black;
   }
`;

const rangeSlider = css`
   grid-area: sliders;

   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-template-rows: 1fr 1fr;

   place-items: center;

   padding: 1.5em 0;

   > label {
      font-size: 0.5em;
      font-family: 'Decovar';

      grid-column: 1/2;
   }
`;
