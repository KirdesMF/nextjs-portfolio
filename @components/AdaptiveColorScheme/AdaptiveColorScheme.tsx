import { ReturnedTheme } from '@adobe/leonardo-contrast-colors';
import { css } from 'linaria';
import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react';
import { Utils } from 'utils/utils';
import { setCSSCustomProperties } from './helpers-scheme';
import { Scheme } from './scheme';

function AdaptiveColorScheme() {
   const { pathname } = useRouter();
   const customPathname = Utils.customURL(pathname) as keyof typeof Scheme;

   const contrastRef = useRef<HTMLInputElement>(null!);
   const brightnessRef = useRef<HTMLInputElement>(null!);

   function handleInputs() {
      const brightnessInput = brightnessRef.current;
      const contrastInput = contrastRef.current;

      const brightnessValue = parseInt(brightnessInput.value);
      const contrastValue = parseInt(contrastInput.value);

      const Theme = Scheme[customPathname](
         brightnessValue,
         contrastValue
      ) as ReturnedTheme;

      setCSSCustomProperties(Theme);
   }

   const debounceInput = Utils.debounce(handleInputs, 100);

   useEffect(() => {
      handleInputs();
   });

   return (
      <div className={wrapper}>
         {/** Brightness slider */}
         <input
            // onChange={debounceInput}
            onChange={debounceInput}
            ref={brightnessRef}
            type="range"
            min="10"
            max="80"
            step={1}
         />

         {/** Constrast slider */}
         <input
            ref={contrastRef}
            // onChange={debounceInput}
            onChange={debounceInput}
            type="range"
            min="1"
            max="5"
            step={1}
         />

         {/**Radio inputs */}
         <input type="radio" name="mode" id="light" />
         <label htmlFor="light">Light</label>

         <input type="radio" name="mode" id="dark" />
         <label htmlFor="dark">Dark</label>
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
