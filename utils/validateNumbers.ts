/**
 *  Error message object
 */
const errors = {
   integer: 'not an integer',
   hue: 'minmax [1 - 360]',
   percent: 'minmax [0 - 100]',
   alpha: 'minmax [0.1 - 1]',
};

/**key of errors obj */
type throwErrorType = keyof typeof errors;

/**
 * Throw an Error Message
 * @param message - Error message
 * @return new Error(message)
 */
const throwError = (message: throwErrorType) => {
   throw new Error(errors[message]);
};

/**
 * Validate numbers method
 *
 * @remarks
 * Help to check the range of a number
 *
 * ```ts
 *    validateNumbers.hue(80) // return 80
 *    validateNumbers.percent(150) // twrow Error Range
 * ```
 */
const validateNumbers = {
   /**
    * Check hue validity
    *
    * Range [1 - 360] [integer]
    * @param num - Number to check
    * @return  checked `num`
    */
   hue: (num: number) => {
      if (num < 0 || num > 360) throwError('hue');
      if (!Number.isInteger(num)) throwError('integer');
      return num;
   },

   /**
    * Check percent validity
    *
    * Range [0 - 100] [integer]
    * @param num - Number to check
    * @returns `${num}%`
    */
   percent: (num: number) => {
      if (num < 0 || num > 100) throwError('percent');
      if (!Number.isInteger(num)) throwError('integer');
      return `${num}%`;
   },

   /**
    * Check percent validity
    *
    * Range [0 - 100] [not integer]
    * @param num - Number to check
    * @returns `checked `num`
    */
   alpha: (num: number) => {
      if (num <= 0 || num > 1) throwError('alpha');
      return num;
   },
};

export { validateNumbers };
