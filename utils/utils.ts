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

const easeLinear = ({ i, s, c, t }: TEase) => {
   return (c * i) / t + s;
};

// Global Utils
const degreeToRadian = (degree: number) => (degree * Math.PI) / 180;
const secondsToFrame = (seconds: number) => seconds * 60;

const toFixNumber = (num: number) => Number(num.toFixed(2));

const rangeHue = (s: number, c: number, e: number) => (s < e ? c : -c);

const getNumberFromString = (color: string) => {
   const match = color.match(/\d+/g)!;

   return {
      h: parseInt(match[0]),
      s: parseInt(match[1]),
      l: parseInt(match[2]),
   };
};

export const Utils = {
   degreeToRadian,
   secondsToFrame,
   toFixNumber,
   rangeHue,
   getNumberFromString,
   ease: {
      easeLinear,
      easeInQuad,
      easeOutQuad,
      easeOutExpo,
      easeInCirc,
      easeOutCirc,
   },
};
