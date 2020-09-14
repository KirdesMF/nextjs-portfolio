import { ReturnedTheme } from '@adobe/leonardo-contrast-colors';
import useCanvasContext from 'context/CanvasContext';
import { css } from 'linaria';
import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react';
import theme from 'Theme/theme';
import { Utils } from 'utils/utils';
import { setCSSCustomProperties, getBackground } from './helpers-scheme';
import { Scheme } from './scheme';

function AdaptiveColorScheme() {
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
      contrastRef.current.max = '3';

      brightnessRef.current.min = '40';
      brightnessRef.current.max = '90';

      contrastRef.current.valueAsNumber = 1;
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
      console.log(localStorage.getItem('theme'));
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

   const debounceInput = Utils.debounce(setAdaptiveColors, 200);

   useEffect(() => {
      setAdaptiveColors();
   });

   useEffect(() => {
      checkThemeAndMode();
      setAdaptiveColors();
   }, []);

   return (
      <div className={wrapper}>
         <label htmlFor="brightness">brightness</label>
         <input
            ref={brightnessRef}
            onChange={debounceInput}
            type="range"
            id="brightness"
         />

         <label htmlFor="contrast">contrast</label>
         <input
            ref={contrastRef}
            onChange={debounceInput}
            type="range"
            id="contrast"
         />

         <label htmlFor="light">Light</label>
         <input
            onChange={handleOnChangeRadioBtn}
            ref={lightRef}
            type="radio"
            name="mode"
            id="light"
         />

         <label htmlFor="dark">Dark</label>
         <input
            onChange={handleOnChangeRadioBtn}
            ref={darkRef}
            type="radio"
            name="mode"
            id="dark"
         />
      </div>
   );
}
export default AdaptiveColorScheme;

// Style
const wrapper = css`
   position: fixed;
   top: 0;
   width: 20%;
   height: 10%;
   left: 20%;
   z-index: 20;
   background: ${theme.COLORS['primary-200']};
   box-shadow: ${theme.SHADOWS['--box-big']} ${theme.COLORS['grey-200']};
   border-radius: 5px;

   transition: background 500ms ease;
   & > button {
      margin-right: 1em;
   }
`;
