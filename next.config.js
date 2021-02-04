const withCSS = require('@zeit/next-css');

const i18n = {
   locales: ['en-US', 'fr'],
   defaultLocale: 'fr',
};

module.exports = withCSS({
   i18n: i18n,
   webpack(config) {
      config.module.rules.push({
         test: /\.tsx?$/,
         use: [
            {
               loader: '@linaria/webpack-loader',
               options: {
                  sourceMap: process.env.NODE_ENV !== 'production',
               },
            },
         ],
      });

      return config;
   },
});
