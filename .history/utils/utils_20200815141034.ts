type TEase = {
   /**@description i = current iteration */
   i: number;
   /**@description s = start value */
   s: number;
   /**@description c = change in value */
   c: number;
   /**@description t = totalIteration */
   t: number;
};

// Ease
const easeInQuad = ({ i, s, c, t }: TEase) => {
   return c * (i /= t) * i + s;
};

const easeOutQuad = ({ i, s, c, t }: TEase) => {
   return -c * (i /= t) * (i - 2) + s;
};

const easeOutExpo = ({ i, s, c, t }: TEase) => {
   return c * (-Math.pow(2, (-10 * i) / t) + 1) + s;
};

const easeInCirc = ({ i, s, c, t }: TEase) => {
   return c * (1 - Math.sqrt(1 - (i /= t) * i)) + s;
};
const easeOutCirc = ({ i, s, c, t }: TEase) => {
   return c * Math.sqrt(1 - (i = i / t - 1) * i) + s;
};

// Global Utils
const degreeToRadian = (degree: number) => (degree * Math.PI) / 180;
const secondsToFrame = (seconds: number) => seconds * 60;

const toFixNumber = (num: number) => Number(num.toFixed(2));

const rangeHue = (num: number) => {
   if (num < 0) num = 360;
   if (num > 360) num = 1;

   return num;
};

export const Utils = {
   degreeToRadian,
   secondsToFrame,
   toFixNumber,
   ease: {
      easeInQuad,
      easeOutQuad,
      easeOutExpo,
      easeInCirc,
      easeOutCirc,
   },
};
