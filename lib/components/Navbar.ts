import Collapse  from './NavbarCollapse.astro';
import Dropdown  from './NavbarDropdown.astro';
import Item  from './NavbarItem.astro';
import Toggler  from './NavbarToggler.astro';
export default Object.assign({
  Collapse, 
  Dropdown, 
  Item, 
  Toggler,
})

import type { Child } from './NavbarDropdown.astro';
export interface NavbarType {
  title: string;
  href?: string;
  children?: Child[];
}
