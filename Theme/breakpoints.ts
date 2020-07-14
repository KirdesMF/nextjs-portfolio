export const breakpoints = {
   medium: `screen and (min-width: 70em)`,
   large: `screen and (min-width: 90em)`,
} as const;

export type BreakpointType = typeof breakpoints;
