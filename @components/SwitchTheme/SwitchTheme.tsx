import { css } from '@linaria/core/';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { COLORS } from 'Theme/colors';

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
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -200"
            result="goo"
         />
         <feComposite in="SourceGraphic" in2="goo" operator="atop" />
      </filter>
   </svg>
);

const Light = () => {
   const VIEWBOX = `0 0 24 24`;
   return (
      <svg aria-hidden="true" focusable="false" viewBox={VIEWBOX}>
         <circle fill="yellow" cx={12} cy={12} r={6} />
      </svg>
   );
};

const Dark = () => {
   const VIEWBOX = `0 0 24 24`;
   return (
      <svg aria-hidden="true" focusable="false" viewBox={VIEWBOX}>
         <circle fill="yellow" cx={12} cy={12} r={6} />
         <circle fill={COLORS.background} cx={16} cy={10} r={4.5} />
      </svg>
   );
};

const Contrast = () => {
   const VIEWBOX = `0 0 24 24`;
   return (
      <svg aria-hidden="true" focusable="false" viewBox={VIEWBOX}>
         <clipPath id="cut-off">
            <rect x="0" y="0" width="12" height="24" />
         </clipPath>
         <circle cx={12} cy={12} r={6} />
         <circle
            cx={12}
            cy={12}
            r={4.5}
            fill="white"
            clipPath="url(#cut-off)"
         />
      </svg>
   );
};

const BTN_SIZE = 45;
const THEME = [
   {
      name: 'light',
      Icon: Light,
   },
   {
      name: 'dark',
      Icon: Dark,
   },
   {
      name: 'contrast',
      Icon: Contrast,
   },
];

export function SwitchTheme() {
   const [isOpen, setIsOpen] = useState(false);
   const [theme, setTheme] = useState('light');

   const handleClick = (name: string) => {
      setTheme(name);
      setIsOpen((prev) => !prev);
   };

   useEffect(() => {
      document.documentElement.dataset.theme = theme;
   }, [theme]);

   return (
      <article className={article}>
         {THEME.map(({ name, Icon }, index) => (
            <motion.button
               onClick={() => handleClick(name)}
               animate={{
                  y: isOpen ? index * BTN_SIZE : 0,
                  zIndex: name === theme ? 1 : 0,
               }}
               key={name}
               className={button}
            >
               <Icon />
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

const button = css`
   all: unset;
   height: ${BTN_SIZE}px;
   width: ${BTN_SIZE}px;

   border-radius: 50%;
   background: ${COLORS.background};

   grid-area: area;
   display: grid;
   place-items: center;
`;
