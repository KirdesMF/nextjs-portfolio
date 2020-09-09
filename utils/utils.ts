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

const randomHue = () => ~~(Math.random() * (360 - 1) + 1);
const randomPercent = () => ~~(Math.random() * (100 - 1) + 1);
const randomHSL = () => {
   return `hsl(${randomHue()}, ${randomPercent()}%, ${randomPercent()}%)`;
};

const hexToHSL = (hex: string) => {
   let r, g, b;

   r = parseInt('0x' + hex[1] + hex[2]);
   g = parseInt('0x' + hex[3] + hex[4]);
   b = parseInt('0x' + hex[5] + hex[6]);

   r /= 255;
   g /= 255;
   b /= 255;

   let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

   if (delta == 0) h = 0;
   else if (cmax == r) h = ((g - b) / delta) % 6;
   else if (cmax == g) h = (b - r) / delta + 2;
   else h = (r - g) / delta + 4;

   h = Math.round(h * 60);

   if (h < 0) h += 360;

   l = (cmax + cmin) / 2;
   s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
   s = +(s * 100).toFixed(1);
   l = +(l * 100).toFixed(1);

   return { h, s, l };
};

export const Utils = {
   degreeToRadian,
   secondsToFrame,
   toFixNumber,
   rangeHue,
   getNumberFromString,
   randomHSL,
   hexToHSL,
   ease: {
      easeLinear,
      easeInQuad,
      easeOutQuad,
      easeOutExpo,
      easeInCirc,
      easeOutCirc,
   },
};
