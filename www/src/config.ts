import type { NavbarItemType } from 'astro-bootstrap'
export const SITE_TITLE: string = 'Astro-Bootstrap';

export const MAIN_MENU: NavbarItemType[] = [
  { title: 'Home', href: '/' },
  { title: 'Getting Started', href: '/getting-started' },
  { title: 'Components', href: '/components' },
  {
    title: 'parent',
    subItems: [{ title: 'child', href: '/' }, { divider: true }, { title: 'child2', href: '/' }],
  },
];
