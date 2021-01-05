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

type AdaptiveProps = {
   area: string;
};

const colors = {
   '/': COLORS['intro-200'],
   '/home': COLORS['home-200'],
   '/about': COLORS['about-200'],
   '/works': COLORS['works-200'],
   '/contact': COLORS['contact-200'],
};

type Mode = 'light' | 'dark' | string;

function ColorScheme({ area }: AdaptiveProps) {
   const { pathname } = useRouter();
   const { setColor } = useCanvasContext();

   const contrastRef = useRef<HTMLInputElement>(null!);
   const brightnessRef = useRef<HTMLInputElement>(null!);

   const [mode, setMode] = useState<Mode>('');
   const [isOpen, setIsOpen] = useState(false);

   const customPathname = Utils.customURLCanvas(pathname);

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
      contrastRef.current.min = '0';
      contrastRef.current.max = '4';

      brightnessRef.current.min = '0';
      brightnessRef.current.max = '100';

      contrastRef.current.value = '1';
      brightnessRef.current.value = '50';
   }

   function setMinMaxDark() {
      contrastRef.current.min = '-3';
      contrastRef.current.max = '4';

      brightnessRef.current.min = '0';
      brightnessRef.current.max = '25';

      contrastRef.current.value = '2';
      brightnessRef.current.value = '12';
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
            <span>Mode</span>
         </label>

         <button className={styles.button} onClick={handleClick}>
            <Icon
               name="sliders"
               size="2rem"
               iconColor={colors[pathname as keyof typeof colors]}
            />
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
      </article>
   );
}
export { ColorScheme };
