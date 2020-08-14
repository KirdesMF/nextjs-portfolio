module.exports = {
   root: true,
   parser: '@typescript-eslint/parser', // the TypeScript parser we installed earlier
   parserOptions: {
      ecmaFeatures: { jsx: true }, // Allows for the parsing of JSX
   },
   extends: [
      'eslint:recommended', // eslint default rules
      'plugin:@typescript-eslint/eslint-recommended', // eslint TypeScript rules (github.com/typescript-eslint/typescript-eslint)
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended', // eslint react rules (github.com/yannickcr/eslint-plugin-react)
      'plugin:jsx-a11y/recommended', // accessibility plugin
   ],
   rules: {
      'react/prop-types': 'off',
      'no-use-before-define': 'off',
      '@typescript-eslint/explicit-function-return-type': [
         'error',
         { variables: false },
      ],
      '@typescript-eslint/no-use-before-define': 'off',
   },

   env: {
      browser: true,
      amd: true,
      node: true,
   },
};
