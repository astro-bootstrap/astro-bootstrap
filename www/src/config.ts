export type menu = (
  | {
      title: string;
      href: string;
      children?: undefined;
    }
  | {
      title: string;
      children: (
        | {
            title: string;
            href: string;
          }
        | {
            divider: true;
          }
      )[];
    }
)[];
export const SITE_TITLE: string = 'Astro-Bootstrap';

export const MAIN_MENU: menu = [
  { title: 'Home', href: '/' },
  { title: 'Getting Started', href: '/getting-started' },
  { title: 'Components', href: '/components' },
  // {
  //   title: 'parent',
  //   children: [{ title: 'child', href: '/' }, { divider: true }],
  // },
];
