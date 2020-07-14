import { Cube, TCube } from './Cube';

// Draw a grid in shape of a Hex, I can use other algorithm to get other shape
/**
 * @description
 * Create a grid of hexagon in shape of hexagon
 * @param radius
 * number of ring to draw the hexagon shape
 * @returns
 * Array of coordinate center of each hex in Cube coord
 *
 */
function shapeHexagon(radius: number) {
   let hexMap: TCube[] = [];
   let r1: number, r2: number;
   for (let q = -radius; q <= radius; q++) {
      r1 = Math.max(-radius, -q - radius);
      r2 = Math.min(radius, -q + radius);

      for (let r = r1; r <= r2; r++) {
         hexMap.push(
            Cube({
               q: q,
               r: r,
               s: -q - r,
            })
         );
      }
   }
   return hexMap;
}

export { shapeHexagon };
