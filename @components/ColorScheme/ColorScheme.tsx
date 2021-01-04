import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useCanvasContext } from 'context/CanvasContext';
import { ReturnedTheme } from '@adobe/leonardo-contrast-colors';
import { motion, Variants } from 'framer-motion';

import { Utils } from 'utils/utils';
import { setCSSCustomProperties, getBackground } from 'utils/color-scheme';
import { IconTheme } from '@components/IconTheme/IconTheme';
import { Icon } from '@components/Icon/Icon';
import { COLORS, generateTheme } from 'Theme/colors';

import * as styles from './ColorScheme.styles';
import * as variants from './ColorScheme.variants';

type AdaptiveProps = {
   area: string;
};

type Mode = 'light' | 'dark' | string;

function ColorScheme({ area }: AdaptiveProps) {
   const { pathname } = useRouter();
   const { setColor } = useCanvasContext();

   const customPathname = Utils.customURLCanvas(pathname);

   const contrastRef = useRef<HTMLInputElement>(null!);
   const brightnessRef = useRef<HTMLInputElement>(null!);

   const [mode, setMode] = useState<Mode>('');
   const [isOpen, setIsOpen] = useState(false);

   function setAdaptiveColors() {
      const brightnessInput = brightnessRef.current;
      const contrastInput = contrastRef.current;

      const brightnessValue = brightnessInput.valueAsNumber;
      const contrastValue = contrastInput.valueAsNumber;

      const Theme = generateTheme(customPathname)(
         brightnessValue,
         contrastValue
      ) as ReturnedTheme;

      setCSSCustomProperties(Theme);

      const background = getBackground(Theme);
      setColor(background);
   }

   function setMinMaxLight() {
      contrastRef.current.min = '0.5';
      contrastRef.current.max = '4';

      brightnessRef.current.min = '40';
      brightnessRef.current.max = '100';

      contrastRef.current.valueAsNumber = 1;
      brightnessRef.current.valueAsNumber = 50;
   }

   function setMinMaxDark() {
      contrastRef.current.min = '0.5';
      contrastRef.current.max = '8';

      brightnessRef.current.min = '0';
      brightnessRef.current.max = '40';

      contrastRef.current.valueAsNumber = 4;
      brightnessRef.current.valueAsNumber = 15;
   }

   function checkThemeAndMode() {
      const mode = localStorage.getItem('mode');

      if (mode && mode === 'dark') {
         setMinMaxDark();
      } else if (mode && mode === 'light') {
         setMinMaxLight();
      } else if (window.matchMedia(`(prefers-color-scheme: dark)`).matches) {
         setMinMaxDark();
      } else if (window.matchMedia(`(prefers-color-scheme: light)`).matches) {
         setMinMaxLight();
      }
   }

   function handleOnChangeRadioBtn(event: React.ChangeEvent<HTMLInputElement>) {
      if (event.currentTarget.checked) {
         contrastRef.current.min = '0';
         contrastRef.current.max = '3';

         brightnessRef.current.min = '40';
         brightnessRef.current.max = '90';

         contrastRef.current.value = '1';
         brightnessRef.current.value = '65';

         localStorage.setItem('mode', 'light');
         setMode('light');
      } else {
         contrastRef.current.min = '0';
         contrastRef.current.max = '10';

         brightnessRef.current.min = '0';
         brightnessRef.current.max = '40';

         contrastRef.current.value = '4';
         brightnessRef.current.value = '17.5';

         localStorage.setItem('mode', 'dark');
         setMode('dark');
      }

      setAdaptiveColors();
   }

   const debounceInput = useMemo(() => Utils.debounce(setAdaptiveColors, 150), [
      setAdaptiveColors,
   ]);

   useEffect(() => {
      checkThemeAndMode();
   }, []);

   useEffect(() => {
      setAdaptiveColors();
      setMode(localStorage.getItem('mode')!);
   }, [pathname]);

   function handleClick() {
      setIsOpen((prev) => !prev);
   }

   return (
      <article className={styles.container} data-area={area}>
         <label className={styles.theme}>
            <input
               type="checkbox"
               onChange={handleOnChangeRadioBtn}
               checked={mode === 'light'}
            />
            <IconTheme mode={mode} />
            <p>Mode</p>
         </label>

         <button className={styles.button} onClick={handleClick}>
            <Icon name="sliders" size="2rem" iconColor={COLORS['about-100']} />
         </button>

         <motion.section
            className={styles.settings}
            variants={variants.section}
            animate={isOpen ? 'in' : 'out'}
            initial="out"
         >
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
         </motion.section>
      </article>
   );
}
export { ColorScheme };
