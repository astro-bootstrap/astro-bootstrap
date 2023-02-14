import type { NavbarItemType } from 'astro-bootstrap'
export const SITE_TITLE = 'Astro-Bootstrap';

export const MAIN_MENU: NavbarItemType[] = [
  { text: 'Home', href: '/' },
  { text: 'Getting Started', href: '/getting-started', parent: true },
  { text: 'Components', href: '/components', parent: true},
  { text: 'Custom Utilities', href: '/components#sideUtilities', parent: true },
  // {
  //   title: 'parent',
  //   subItems: [{ title: 'child', href: '/' }, { divider: true }, { title: 'child2', href: '/' }],
  // },
];
