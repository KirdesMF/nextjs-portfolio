function usePathName() {
   const pathNameToTitle = {
      '/': 'welcome',
      '/home': 'home',
      '/about': 'about',
      '/works': 'works',
      '/contact': 'contact',
   } as const;

   const pathToTitle = (pathname: keyof typeof pathNameToTitle) =>
      pathNameToTitle[pathname];

   return { pathToTitle };
}

export default usePathName;
