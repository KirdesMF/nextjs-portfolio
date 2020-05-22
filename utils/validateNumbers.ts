const errors = {
   integer: 'not an integer',
   hue: 'minmax [1 - 360]',
   percent: 'minmax [0 - 100]',
   alpha: 'minmax [0.1 - 1]',
};

type throwErrorType = keyof typeof errors;

const throwError = (message: throwErrorType) => {
   throw new Error(errors[message]);
};

const validateNumbers = {
   hue: (num: number) => {
      if (num < 0 || num > 360) throwError('hue');
      if (!Number.isInteger(num)) throwError('integer');
      return num;
   },

   /** return num + % */
   percent: (num: number) => {
      if (num < 0 || num > 100) throwError('percent');
      if (!Number.isInteger(num)) throwError('integer');
      return `${num}%`;
   },

   alpha: (num: number) => {
      if (num <= 0 || num > 1) throwError('alpha');
      return num;
   },
};

export { validateNumbers };
