import React, { Fragment, useEffect } from 'react';
import { wrapper } from './ColorMode.styled';

function ColorMode() {
   useEffect(() => {
      const currentTheme = localStorage.getItem('theme');
      if (currentTheme) {
         document.documentElement.dataset.theme = currentTheme;
      } else if (window.matchMedia('prefer-color-scheme: dark')) {
         document.documentElement.dataset.theme = 'dark';
      } else {
         return;
      }
   }, []);

   const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      document.documentElement.dataset.theme = event.currentTarget.innerHTML.toLowerCase();
      localStorage.setItem(
         'theme',
         event.currentTarget.innerHTML.toLowerCase()
      );
   };
   return (
      <Fragment>
         <div className={wrapper}>
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <button
               style={{ '--color': 'blue' } as React.CSSProperties}
               onClick={handleClick}
            >
               LIGHT
            </button>
            <button
               style={{ '--color': 'green' } as React.CSSProperties}
               onClick={handleClick}
            >
               DARK
            </button>
            <button data-color="red" onClick={handleClick}>
               CONTRAST
            </button>
         </div>
      </Fragment>
   );
}

export default ColorMode;
