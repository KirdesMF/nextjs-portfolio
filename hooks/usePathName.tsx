function usePathName() {
   const pathNameToTitle = {
      '/': 'welcome',
      '/home': 'home',
      '/about': 'about',
      '/works': 'works',
      '/contact': 'contact',
   } as const;

   const pathToTitle = (pathname: string) =>
      pathNameToTitle[pathname as keyof typeof pathNameToTitle];

   return { pathToTitle };
}

export default usePathName;
