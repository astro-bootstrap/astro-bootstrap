/**
 * Export astro components
 * usage:
 * import { ComponentName } from 'astro-bootstrap';
 */


// Accordion
export { default as Accordion } from './lib/components/Accordion';
export type { Props as AccordionType } from './lib/components/Accordion.astro';
export type { AccordionDataType } from './lib/components/Accordion.astro';
export type { Props as AccordionBodyType } from './lib/components/AccordionBody.astro';
export type { Props as AccordionHeaderType } from './lib/components/AccordionHeader.astro';
export type { Props as AccordionItemType } from './lib/components/AccordionItem.astro';

// Alert
export { default as Alert } from './lib/components/Alert';
export type { Props as AlertType } from './lib/components/AlertDefault.astro';
export type { Props as AlertHeadingType } from './lib/components/AlertHeading.astro';
export type { Props as AlertLinkType } from './lib/components/AlertLink.astro';

// Breadcrumb
export { default as Breadcrumb } from './lib/components/Breadcrumb';
export type { Props as BreadcrumbType } from './lib/components/Breadcrumb.astro';
export type { Props as BreadcrumbItemType } from './lib/components/BreadcrumbItem.astro';


// Carousel
export { default as Carousel } from './lib/components/Carousel';
export type { CarouselSlideType } from './lib/components/CarouselSlide';
// Can be accessed from Carousel
// export { default as CarouselDefault } from './lib/components/Carousel.astro';
// export { default as CarouselControls } from './lib/components/CarouselControls.astro';
// export { default as CarouselControl } from './lib/components/CarouselControl.astro';
// export { default as CarouselIndicators } from './lib/components/CarouselIndicators.astro';
// export { default as CarouselItem } from './lib/components/CarouselItem.astro';

// Dropdown

export { default as Dropdown } from './lib/components/Dropdown';

// Nav
export { default as Nav } from './lib/components/Nav';
export type { Props as NavType } from './lib/components/NavDefault.astro';
export type { Props as NavItemType } from './lib/components/NavItem.astro';

// Navbar 
export { default as Navbar } from './lib/components/Navbar';
export type { NavbarItemType } from './lib/components/NavbarItems.astro';


// Change to NavDropdown
export type { Props as DropdownType } from './lib/components/Dropdown.astro';
export type { Props as DropdownItemType } from './lib/components/NavbarDropdownItem.astro';




// Modal
export { default as Modal } from './lib/components/Modal';

// Pagination
export { default as Pagination } from './lib/components/Pagination.astro';

// Tabs
export { default as Tabs} from './lib/components/Tabs.astro';
export type { TabsType } from './lib/components/Tabs.astro';
// Tab
export { default as Tab } from './lib/components/Tab';
export type { Props as TabItemType } from './lib/components/TabsItem.astro';
export type { Props as TabListType } from './lib/components/TabsList.astro';
export type { Props as TabContentType } from './lib/components/TabContent.astro';
export type { Props as TabPaneType } from './lib/components/TabPane.astro';


// Toasts
export { default as Toast } from './lib/components/Toast';

// Tooltip
export {default as Tooltip} from './lib/components/Tooltip.astro';


// Utils
//
export { default as ActiveLink } from './lib/utils/ActiveLink.astro';
export { default as Marked } from './lib/utils/Marked.astro';
export { default as InlineCode } from './lib/utils/InlineCode.astro';
