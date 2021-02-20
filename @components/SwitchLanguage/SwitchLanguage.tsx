import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { css } from '@linaria/core/';
import { COLORS } from 'Theme/colors';
import { useState } from 'react';

const GooFilter = () => (
   <svg
      aria-hidden="true"
      focusable="false"
      style={{ width: 0, height: 0, position: 'absolute' }}
   >
      <filter id="goo">
         <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
         <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
            result="goo"
         />
         <feComposite in="SourceGraphic" in2="goo" operator="atop" />
      </filter>
   </svg>
);

const BTN_SIZE = 45;

const LANGUAGE = [
   { myLocale: 'fr', name: 'FR' },
   { myLocale: 'en-US', name: 'EN' },
];

export function SwitchLanguage() {
   const [isOpen, setIsOpen] = useState(false);

   const router = useRouter();
   const { pathname, locale } = router;

   const handleClick = async (myLocale: string) => {
      if (myLocale !== locale) {
         await router.push(`${pathname}`, `${pathname}`, {
            locale: myLocale,
         });
      }
      setIsOpen((prev) => !prev);
   };

   return (
      <article className={article}>
         {LANGUAGE.map(({ myLocale, name }, index) => (
            <motion.button
               key={name}
               className={circle}
               onClick={() => handleClick(myLocale)}
               animate={{
                  y: isOpen ? index * BTN_SIZE : 0,
                  zIndex: myLocale === locale ? 1 : 0,
               }}
            >
               {name}
            </motion.button>
         ))}
      </article>
   );
}

const article = css`
   place-self: center;
   display: grid;
   grid-template: 'area' 1fr / 1fr;
   filter: url(#goo) drop-shadow(0px 0px 1.5px black);
`;

const circle = css`
   all: unset;
   height: ${BTN_SIZE}px;
   width: ${BTN_SIZE}px;

   border-radius: 50%;
   background: ${COLORS.background};

   grid-area: area;
   display: grid;
   place-items: center;

   font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
   color: ${COLORS.text};
`;
