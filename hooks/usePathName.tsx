import useAppContext from './useAppContext';
function usePathName() {
   const { colors } = useAppContext();

   const pathnameToColors = {
      '/': colors.black,
      '/home': colors.home,
      '/about': colors.about,
      '/works': colors.works,
      '/contact': colors.contact,
   };

   const pathNameToTitle = {
      '/': 'welcome',
      '/home': 'home',
      '/about': 'about',
      '/works': 'works',
      '/contact': 'contact',
   };

   const pathToColor = (pathname: string) =>
      pathnameToColors[pathname as keyof typeof pathnameToColors];

   const pathToTitle = (pathname: string) =>
      pathNameToTitle[pathname as keyof typeof pathnameToColors];

   return { pathToColor, pathToTitle };
}

export default usePathName;
