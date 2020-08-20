declare type PagesNameType = 'home' | 'about' | 'works' | 'contact';
declare type URLType = '/' | '/home' | '/about' | '/works' | '/contact';

declare type LinksType = {
   name: PagesNameType;
   href: URLType;
};

declare const linksNavigation: LinksType[] = [
   { name: 'home', href: '/home' },
   { name: 'about', href: '/about' },
   { name: 'works', href: '/works' },
   { name: 'contact', href: '/contact' },
] as const;
