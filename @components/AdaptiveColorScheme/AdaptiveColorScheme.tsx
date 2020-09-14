import { ReturnedTheme } from '@adobe/leonardo-contrast-colors';
import useCanvasContext from 'context/CanvasContext';
import { css } from 'linaria';
import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react';
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

   function setMinMax(event: React.ChangeEvent<HTMLInputElement>) {
      if (event.currentTarget.id === 'light') {
         contrastRef.current.min = '0';
         contrastRef.current.max = '3';

         brightnessRef.current.min = '40';
         brightnessRef.current.max = '90';

         contrastRef.current.value = '1';
         brightnessRef.current.value = '65';
      }

      if (event.currentTarget.id === 'dark') {
         contrastRef.current.min = '0';
         contrastRef.current.max = '8';

         brightnessRef.current.min = '0';
         brightnessRef.current.max = '40';

         contrastRef.current.value = '4';
         brightnessRef.current.value = '17.5';
      }

      setAdaptiveColors();
   }

   const debounceInput = Utils.debounce(setAdaptiveColors, 200);

   useEffect(() => {
      brightnessRef.current.valueAsNumber = 50;
      contrastRef.current.valueAsNumber = 1;

      if (window.matchMedia(`(prefers-color-scheme: dark)`).matches) {
         darkRef.current.checked = true;
      }

      if (window.matchMedia(`(prefers-color-scheme: light)`).matches) {
         lightRef.current.checked = true;
      }

      setAdaptiveColors();
   }, []);

   useEffect(() => {
      setAdaptiveColors();
   });

   return (
      <div className={wrapper}>
         {/** Brightness slider */}
         <input onChange={debounceInput} ref={brightnessRef} type="range" />

         {/** Constrast slider */}
         <input ref={contrastRef} onChange={debounceInput} type="range" />

         {/**Radio inputs */}
         <label htmlFor="light">Light</label>
         <input
            onChange={setMinMax}
            ref={lightRef}
            type="radio"
            name="mode"
            id="light"
         />

         <label htmlFor="dark">Dark</label>
         <input
            onChange={setMinMax}
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
   width: 30%;
   left: 20%;
   z-index: 20;
   background: red;

   & > button {
      margin-right: 1em;
   }
`;
