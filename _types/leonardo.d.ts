import '@adobe/leonardo-contrast-colors';
declare module '@adobe/leonardo-contrast-colors' {
   export type Background = { background: string };

   export type Scheme = {
      name: string;
      values: {
         name: string;
         contrast: number;
         value: string;
      }[];
   };

   export type ReturnedTheme = (Background | Scheme)[];

   // prettier-ignore
   type AdaptiveTheme = (brightness: number, constrast?: number) => ReturnedTheme

   type GenerateTheme<T> = {
      brightness?: T;
      colorScales: NamedColorScale[];
      baseScale: string;
      contrast?: number;
      output?: Colorspace;
   };

   declare function generateAdaptiveTheme<T>({
      brightness: T,
      ...rest
   }: GenerateTheme<T>): T extends number ? ReturnedTheme : AdaptiveTheme;
}
