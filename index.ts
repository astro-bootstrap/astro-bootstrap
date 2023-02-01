/**
 * Export astro components
 * usage:
 * import { ComponentName } from 'astro-bootstrap';
 */

// Alert
export { default as Alert } from './lib/components/Alert';
// Available from Alert
export { default as AlertDefault } from './lib/components/AlertDefault.astro';
export { default as AlertHeading } from './lib/components/AlertHeading.astro';
export { default as AlertLink } from './lib/components/AlertLink.astro';

// Accordion
export { default as Accordion } from './lib/components/Accordion.astro';
export { AccordionType } from './lib/components/Accordion.astro';
export { default as AccordionBody } from './lib/components/AccordionBody.astro';
export { default as AccordionHeader } from './lib/components/AccordionHeader.astro';
export { default as AccordionItem } from './lib/components/AccordionItem.astro';

// Breadcrumb
export { default as Breadcrumb } from './lib/components/Breadcrumb.astro';
export { default as BreadcrumbItem } from './lib/components/BreadcrumbItem.astro';

// Carousel
export { default as Carousel } from './lib/components/Carousel';
export type { CarouselSlideType } from './lib/components/CarouselSlide';
// Can be accessed from Carousel
export { default as CarouselDefault } from './lib/components/CarouselDefault.astro';
export { default as CarouselControls } from './lib/components/CarouselControls.astro';
export { default as CarouselControl } from './lib/components/CarouselControl.astro';
export { default as CarouselIndicators } from './lib/components/CarouselIndicators.astro';
export { default as CarouselItem } from './lib/components/CarouselItem.astro';

// Navbar Components
export { default as Navbar } from './lib/components/Navbar';
export type { NavbarType } from './lib/components/Navbar';
// Accessible in Navbar
export { default as NavbarCollapse } from './lib/components/NavbarCollapse.astro';
export { default as NavbarDropdown } from './lib/components/NavbarDropdown.astro';
export { default as NavbarItem } from './lib/components/NavbarItem.astro';
export { default as NavbarToggler } from './lib/components/NavbarToggler.astro';

// Pagination
export { default as Pagination } from './lib/components/Pagination.astro';

// Tabs
export { default as Tabs} from './lib/components/Tabs';
// Accessible from Tabs
export { default as TabsDefault } from './lib/components/TabsDefault.astro';
export { default as TabsList } from './lib/components/TabsList.astro';
export { default as TabsItem } from './lib/components/TabsItem.astro';
export { default as TabsContent } from './lib/components/TabsContent.astro';
export { default as TabsPane } from './lib/components/TabsPane.astro';

// Utils
//
export { default as ActiveLink } from './lib/utils/ActiveLink.astro';
export { default as Marked } from './lib/utils/Marked.astro';
export { default as InlineCode } from './lib/utils/InlineCode.astro';
