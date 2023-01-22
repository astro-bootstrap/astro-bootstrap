/**
 * Export astro components
 * usage:
 * import { ComponentName } from 'a/libstro-bootstrap';
 */

// Accordion
export { default as Accordion } from './lib/components/Accordion.astro';
export { default as AccordionBody } from './lib/components/AccordionBody.astro';
export { default as AccordionHeader } from './lib/components/AccordionHeader.astro';
export { default as AccordionItem } from './lib/components/AccordionItem.astro';

// Active Link
export { default as ActiveLink } from './lib/components/ActiveLink.astro';

// Breadcrumb
export { default as Breadcrumb } from './lib/components/Breadcrumb.astro';
export { default as BreadcrumbItem } from './lib/components/BreadcrumbItem.astro';

// Navbar Components
// import * as Navbar from './lib/components/Navbar';
// export { Navbar };
// to allow Navbar.Item etc..
// if it works try this below
export * as Navbar from './lib/components/Navbar';
export { default as NavbarCollapse } from './lib/components/NavbarCollapse.astro';
export { default as NavbarDropdown } from './lib/components/NavbarDropdown.astro';
export { default as NavbarItem } from './lib/components/NavbarItem.astro';
export { default as NavbarToggler } from './lib/components/NavbarToggler.astro';

// Pagination
export { default as Pagination } from './lib/components/Pagination.astro';

// Tabs
export { default as NavTab } from './lib/components/NavTab.astro';
export { default as NavTabs } from './lib/components/NavTabs.astro';
export { default as TabContent } from './lib/components/TabContent.astro';
export { default as TabPane } from './lib/components/TabPane.astro';
export { default as Tabs } from './lib/components/Tabs.astro';
