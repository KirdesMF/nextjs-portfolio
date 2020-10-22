import React from 'react';
import { motion } from 'framer-motion';

import variants from './IconTheme.variants';
import style from './IconTheme.style';

type IconThemeProps = {
   mode: 'light' | 'dark' | string;
};

function IconTheme({ mode }: IconThemeProps) {
   const animate = (function startAnimation() {
      if (mode === 'light') return 'light';
      else return 'dark';
   })();

   return (
      <svg
         className={style.svg}
         version="1.1"
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 29 29.6"
         focusable="false"
         aria-hidden="true"
      >
         <title>Dark mode icon</title>

         <motion.g
            className="icon"
            variants={variants.icon}
            initial="initial"
            animate={animate}
         >
            <motion.g
               className="light"
               variants={variants.light}
               initial="initial"
               animate={animate}
            >
               <g className="day">
                  <path
                     fill="#74C0EB"
                     d="M21.6,14.6c0,3.6-2.9,6.6-6.5,6.7c-3.6,0-6.6-2.9-6.7-6.5"
                  />
                  <path
                     fill="#ACD591"
                     d="M12.4,18.9c-1.4,0-1.8,0.7-1.8,0.7s0,0,0,0c0.5,0.5,1.1,0.9,1.8,1.1C12.4,20.8,13.8,18.9,12.4,18.9z"
                  />
                  <path
                     fill="#ACD591"
                     d="M17.2,16.5c0.1,0.3,0.3,0.5,0.5,0.6c0.6,0.2,1.6-0.7,2.4-2.4l-3,0c0,0.3-0.1,0.7,0,1.1"
                  />
               </g>
               <g className="clouds">
                  <path
                     fill="#F4E5B1"
                     d="M8.7,22.5L8.7,22.5c0.1,0,0.1,0,0.1,0.1c0.4,0.3,0.9,0.3,1.2-0.1c0.2-0.3,0.3-0.7,0.1-1
   c0.1,0,0.2-0.1,0.3-0.2c0.2-0.2,0.2-0.6,0-0.9l0.1-0.1c0.2-0.2,0.2-0.6,0-0.8l-0.1-0.1c-0.2-0.2-0.6-0.2-0.8,0l-1.9,2.1
   c-0.2,0.2-0.2,0.6,0,0.8l0.1,0.1C8.2,22.8,8.5,22.8,8.7,22.5z"
                  />
                  <path
                     fill="#F4E5B1"
                     d="M20.8,23.3L20.8,23.3C20.8,23.3,20.8,23.3,20.8,23.3c0.4,0.3,0.8,0.3,1,0c0.2-0.2,0.2-0.5,0.1-0.7
   c0.1,0,0.2-0.1,0.2-0.1c0.2-0.2,0.2-0.5,0-0.6l0-0.1c0.1-0.2,0.1-0.4,0-0.6l-0.1,0c-0.2-0.1-0.4-0.1-0.6,0l-1.4,1.6
   c-0.1,0.2-0.1,0.4,0,0.6l0.1,0C20.4,23.5,20.6,23.5,20.8,23.3z"
                  />
                  <path
                     fill="#F4E5B1"
                     d="M18.3,18.1L18.3,18.1c0.1,0,0.1,0,0.1,0.1c0.4,0.3,0.9,0.3,1.2-0.1c0.2-0.3,0.3-0.6,0.1-0.9
   c0.1,0,0.2-0.1,0.3-0.2c0.2-0.2,0.2-0.6,0-0.8l0.1-0.1c0.2-0.2,0.2-0.6,0-0.8l-0.1-0.1c-0.2-0.2-0.6-0.2-0.8,0l-1.8,2.1
   c-0.2,0.2-0.2,0.6,0,0.8l0.1,0.1C17.8,18.4,18.1,18.3,18.3,18.1z"
                  />
               </g>
               <g className="sun">
                  <path
                     fill="#F7931E"
                     d="M19.8,21.1c0-0.1,0-0.1,0-0.2c-0.2-0.2-0.3-0.4-0.4-0.7s-0.1-0.5-0.1-0.8c0-0.1,0-0.1-0.1-0.1
   c-0.3-0.1-0.5-0.2-0.7-0.4c-0.2-0.2-0.4-0.4-0.4-0.7c0-0.1-0.1-0.1-0.2-0.1c-0.2,0.1-0.5,0.1-0.8,0s-0.5-0.2-0.7-0.4
   c-0.1,0-0.1,0-0.2,0c-0.2,0.2-0.4,0.3-0.7,0.4c-0.3,0.1-0.5,0.1-0.8,0.1c-0.1,0-0.1,0-0.1,0.1c-0.1,0.3-0.2,0.5-0.4,0.7
   c-0.2,0.2-0.4,0.4-0.7,0.4c-0.1,0-0.1,0.1-0.1,0.2c0.1,0.2,0.1,0.5,0,0.8c-0.1,0.3-0.2,0.5-0.4,0.7c0,0.1,0,0.1,0,0.2
   c0.2,0.2,0.3,0.4,0.4,0.7c0.1,0.3,0.1,0.5,0.1,0.8c0,0.1,0,0.1,0.1,0.1c0.3,0.1,0.5,0.2,0.7,0.4c0.2,0.2,0.4,0.4,0.4,0.7
   c0,0.1,0.1,0.1,0.2,0.1c0.2-0.1,0.5-0.1,0.8,0s0.5,0.2,0.7,0.4c0.1,0,0.1,0,0.2,0c0.2-0.2,0.4-0.3,0.7-0.4
   c0.3-0.1,0.5-0.1,0.8-0.1c0.1,0,0.1,0,0.1-0.1c0.1-0.3,0.2-0.5,0.4-0.7c0.2-0.2,0.4-0.4,0.7-0.4c0.1,0,0.1-0.1,0.1-0.2
   c-0.1-0.2-0.1-0.5,0-0.8C19.5,21.5,19.7,21.3,19.8,21.1z"
                  />
                  <circle fill="#FCEE21" cx="16.5" cy="21.2" r="1.9" />
               </g>
            </motion.g>
            <motion.g
               className="dark"
               variants={variants.dark}
               initial="initial"
               animate={animate}
            >
               <g className="night">
                  <path
                     fill="#676AB1"
                     d="M8.4,14.8c0-3.6,2.9-6.6,6.5-6.7c3.6,0,6.6,2.9,6.7,6.5"
                  />
                  <path
                     fill="#9896CA"
                     d="M9.7,14.7c0.4-1.4,0.8-3,1.3-2.7c0.8,0.5,2,0.7,1.7,2.6L9.7,14.7z"
                  />
                  <path
                     fill="#9896CA"
                     d="M16.3,9.6c0.8-0.3,1.7-0.6,1.5-0.9c-0.3-0.1-1-0.4-1.3-0.4C16.5,8.3,15.5,10,16.3,9.6z"
                  />
               </g>
               <g className="stars">
                  <circle fill="#FCEE21" cx="7.2" cy="12.9" r="0.5" />
                  <circle fill="#FCEE21" cx="18.8" cy="12.5" r="0.3" />
                  <circle fill="#FCEE21" cx="7.7" cy="7.2" r="0.3" />
                  <circle fill="#FCEE21" cx="14.2" cy="13.6" r="0.4" />
                  <circle fill="#FCEE21" cx="17.7" cy="10" r="0.3" />
                  <circle fill="#FCEE21" cx="17.7" cy="7.3" r="0.1" />
                  <circle fill="#FCEE21" cx="10.9" cy="10.9" r="0.3" />
               </g>
               <g className="moon">
                  <path
                     fill="#F4E5B1"
                     d="M12.5,8.2c-1.6-0.2-2.9-1.3-3.2-2.8C9.2,5.7,9.1,6,9.1,6.4c-0.2,2,1.3,3.7,3.2,3.9c2,0.2,3.7-1.3,3.9-3.2
c0-0.4,0-0.7-0.1-1C15.5,7.5,14.1,8.4,12.5,8.2z"
                  />
               </g>
            </motion.g>
            <g className="line">
               <line
                  fill="none"
                  stroke="#000000"
                  strokeWidth="0.4845"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  x1="26.5"
                  y1="14.6"
                  x2="3.4"
                  y2="14.9"
               />
            </g>
         </motion.g>
      </svg>
   );
}

export default IconTheme;
