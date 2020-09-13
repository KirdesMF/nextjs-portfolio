import { ReturnedTheme } from '@adobe/leonardo-contrast-colors';
import { css } from 'linaria';
import React, { useEffect, useRef } from 'react';
import { setCSSCustomProperties } from './helpers-scheme';
import { welcomeColorScheme } from './scheme';

function AdaptiveColorScheme() {
   const contrastRef = useRef<HTMLInputElement>(null!);
   const brightnessRef = useRef<HTMLInputElement>(null!);

   const handleInputs = () => {
      const brightnessInput = brightnessRef.current;
      const contrastInput = contrastRef.current;

      const brightnessValue = parseInt(brightnessInput.value);
      const contrastValue = parseInt(contrastInput.value);

      const welcomeColorTheme = welcomeColorScheme(
         brightnessValue,
         contrastValue
      ) as ReturnedTheme;
      setCSSCustomProperties(welcomeColorTheme);
   };

   useEffect(() => {
      const brightnessInput = brightnessRef.current;
      const contrastInput = contrastRef.current;

      let brightness = parseInt(brightnessInput.value);
      let contrast = parseInt(contrastInput.value);

      brightness = 30;
      contrast = 1;

      const welcomeColorTheme = welcomeColorScheme(
         brightness,
         contrast
      ) as ReturnedTheme;

      // TODO background for all theme
      setCSSCustomProperties(welcomeColorTheme);
   });

   return (
      <div className={wrapper}>
         <input
            onChange={handleInputs}
            ref={brightnessRef}
            type="range"
            min="30"
            max="80"
         />
         <input
            ref={contrastRef}
            onChange={handleInputs}
            type="range"
            min="1"
            max="5"
         />

         <input type="checkbox" name="" id="" />
         <input type="checkbox" name="" id="" />
      </div>
   );
}

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

export default AdaptiveColorScheme;
