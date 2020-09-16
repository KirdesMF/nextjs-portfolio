import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import useCanvasContext from 'context/CanvasContext';
import { ReturnedTheme } from '@adobe/leonardo-contrast-colors';
import { Utils } from 'utils/utils';
import { setCSSCustomProperties, getBackground } from './utils/helpers-scheme';
import { Scheme } from './utils/scheme';
import IconTheme from './IconTheme/IconTheme';

import * as style from './ColorScheme.style';

type AdaptiveProps = {
   area: string;
};

type Theme = 'light' | 'dark' | string;

function ColorScheme({ area }: AdaptiveProps) {
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
   }, [pathname]);

   useEffect(() => {
      setTheme(localStorage.getItem('theme')!);
      checkThemeAndMode();
      setAdaptiveColors();
   }, []);

   return (
      <article className={style.container} data-area={area}>
         <IconTheme theme={theme} />

         <section className={style.theme}>
            <label>
               <input
                  id="light"
                  type="radio"
                  name="mode"
                  ref={lightRef}
                  onChange={handleOnChangeRadioBtn}
               />
               <p>Light</p>
            </label>

            <label>
               <input
                  id="dark"
                  type="radio"
                  name="mode"
                  ref={darkRef}
                  onChange={handleOnChangeRadioBtn}
               />
               <p>Dark</p>
            </label>
         </section>

         <section className={style.settings}>
            <label>
               <input
                  type="range"
                  id="brightness"
                  name="brightness"
                  step={1}
                  ref={brightnessRef}
                  onChange={debounceInput}
               />
               <p>brightness</p>
            </label>

            <label>
               <input
                  type="range"
                  name="contrast"
                  id="contrast"
                  step={0.1}
                  ref={contrastRef}
                  onChange={debounceInput}
               />
               <p>contrast</p>
            </label>
         </section>
      </article>
   );
}
export default ColorScheme;
