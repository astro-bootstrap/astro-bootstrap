import type { NavbarItemType } from 'astro-bootstrap'
export const SITE_TITLE = 'Astro-Bootstrap';

export const MAIN_MENU: NavbarItemType[] = [
  { text: 'Home', href: '/' },
  { text: 'Getting Started', href: '/getting-started' },
  { text: 'Components', href: '/components' },
  { text: 'Custom Utilities', href: '/utilities#sideUtilities' },
  // {
  //   title: 'parent',
  //   subItems: [{ title: 'child', href: '/' }, { divider: true }, { title: 'child2', href: '/' }],
  // },
];
