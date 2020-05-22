export const breakpoints = (points: number) => ({
   medium: `screen and (min-width: ${points}em)`,
   large: `screen and (min-width: ${points}em)`,
});

export type BreakpointType = ReturnType<typeof breakpoints>;
