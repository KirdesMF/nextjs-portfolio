import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useCanvasContext } from 'context/CanvasContext';
import { ReturnedTheme } from '@adobe/leonardo-contrast-colors';
import { motion } from 'framer-motion';

import { Utils } from 'utils/utils';
import { setCSSCustomProperties, getBackground } from 'utils/color-scheme';
import { IconTheme } from '@components/IconTheme/IconTheme';
import { Icon } from '@components/Icon/Icon';
import { COLORS, generateTheme } from 'Theme/colors';

import * as styles from './ColorScheme.styles';
import * as variants from './ColorScheme.variants';

type Mode = 'light' | 'dark';

function ColorScheme() {
   const { pathname } = useRouter();
   const { setColor } = useCanvasContext();

   const contrastRef = useRef<HTMLInputElement>(null!);
   const brightnessRef = useRef<HTMLInputElement>(null!);

   const [mode, setMode] = useState<Mode>('light');
   const [isOpen, setIsOpen] = useState(false);

   const customPathname = Utils.customURLCanvas(pathname);
   const colorSliderIcon = `${customPathname}-200` as keyof typeof COLORS;

   function handleClick() {
      setIsOpen((prev) => !prev);
   }

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

   const debounceInput = useMemo(() => Utils.debounce(setAdaptiveColors, 150), [
      setAdaptiveColors,
   ]);

   function setMinMaxLight() {
      contrastRef.current.min = '0';
      contrastRef.current.max = '4';

      brightnessRef.current.min = '0';
      brightnessRef.current.max = '100';

      contrastRef.current.value = '1';
      brightnessRef.current.value = '50';
   }

   function setMinMaxDark() {
      contrastRef.current.min = '0';
      contrastRef.current.max = '4';

      brightnessRef.current.min = '0';
      brightnessRef.current.max = '25';

      contrastRef.current.value = '2';
      brightnessRef.current.value = '25';
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
         setMinMaxLight();
         localStorage.setItem('mode', 'light');
         setMode('light');
      } else {
         setMinMaxDark();
         localStorage.setItem('mode', 'dark');
         setMode('dark');
      }

      setAdaptiveColors();
   }

   useEffect(() => {
      checkThemeAndMode();
   }, []);

   useEffect(() => {
      const mode = localStorage.getItem('mode') as Mode;
      setAdaptiveColors();
      setMode(mode);
   }, [pathname]);

   return (
      <article className={styles.scheme}>
         <motion.section
            className={styles.range}
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
               <span>brightness</span>
            </label>

            <label>
               <input
                  type="range"
                  name="contrast"
                  id="contrast"
                  step={1}
                  ref={contrastRef}
                  onChange={debounceInput}
               />
               <span>contrast</span>
            </label>
         </motion.section>

         <button className={styles.btnRange} onClick={handleClick}>
            <Icon name="sliders" iconColor={COLORS[colorSliderIcon]} />
         </button>

         <input
            className={styles.inputTheme}
            type="checkbox"
            onChange={handleOnChangeRadioBtn}
            checked={mode === 'light'}
            id="theme"
         />

         <label className={styles.theme} htmlFor="theme">
            <IconTheme mode={mode} />
            <span>Mode</span>
         </label>
      </article>
   );
}
export { ColorScheme };
