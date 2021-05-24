import { globalStyle } from '@vanilla-extract/css';

globalStyle('#__next', {
   minHeight: '100vh',
   display: 'grid',
   gridTemplateColumns: '[gutter-left]0.2fr [main]3fr [gutter-right]0.2fr',
   gridTemplateRows: '[header]75px [main]1fr [footer]100px',
   backgroundImage:
      'linear-gradient(0deg, grey 1px, transparent 1px),linear-gradient(90deg, grey 1px, transparent 1px)',
   backgroundSize: '40px 40px',
});

globalStyle('[data-col~=main]', {
   gridColumn: 'main',
});
