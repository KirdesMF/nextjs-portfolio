import React, { useEffect } from 'react';
import { SColorMode } from './ColorMode.styled';

export default function ColorMode() {
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
      <SColorMode.Wrapper>
         <input type="checkbox" />
         <input type="checkbox" />
         <input type="checkbox" />
         <button onClick={handleClick}>LIGHT</button>
         <button onClick={handleClick}>DARK</button>
         <button onClick={handleClick}>CONTRAST</button>
      </SColorMode.Wrapper>
   );
}
