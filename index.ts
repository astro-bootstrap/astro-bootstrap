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
export type { Props as AlertType } from './lib/components/Alert.astro';
export type { Props as AlertHeadingType } from './lib/components/AlertHeading.astro';
export type { Props as AlertLinkType } from './lib/components/AlertLink.astro';

// Breadcrumb
export { default as Breadcrumb } from './lib/components/Breadcrumb';
export type { Props as BreadcrumbType } from './lib/components/Breadcrumb.astro';
export type { Props as BreadcrumbItemType } from './lib/components/BreadcrumbItem.astro';

// Button (incomplete)
export { default as Button } from './lib/components/Button.astro';
export type { Props as ButtonType } from './lib/components/Button.astro';

// Carousel
export { default as Carousel } from './lib/components/Carousel';
export type { CarouselSlideType } from './lib/components/CarouselSlide';
export type { Prop as CarouselType } from './lib/components/Carousel.astro';
export type { Prop as CarouselControlsType } from './lib/components/CarouselControls.astro';
export type { Prop as CarouselControlType } from './lib/components/CarouselControl.astro';
export type { Prop as CarouselIndicatorType } from './lib/components/CarouselIndicator.astro';
export type { Prop as CarouselIndicatorsType } from './lib/components/CarouselIndicators.astro';
export type { Prop as CarouselItemType } from './lib/components/CarouselItem.astro';

// Dropdowns
export { default as Dropdown } from './lib/components/Dropdown';
export type { Props as DropdownType } from './lib/components/Dropdown.astro';
export type { Props as DropdownDividerType } from './lib/components/DropdownDivider.astro';
export type { Props as DropdownItemType } from './lib/components/DropdownItem.astro';
export type { Props as DropdownLinkType } from './lib/components/DropdownLink.astro';
export type { Props as DropdownMenuType } from './lib/components/DropdownMenu.astro';

// Modal
export { default as Modal } from './lib/components/Modal';
export type { Props as ModalBodyType } from './lib/components/ModalBody.astro';
export type { Props as ModalFooterType } from './lib/components/ModalFooter.astro';
export type { Props as ModalHeaderType } from './lib/components/ModalHeader.astro';


// Nav
export { default as Nav } from './lib/components/Nav';
export type { Props as NavType } from './lib/components/NavDefault.astro';
export type { Props as NavItemType } from './lib/components/NavItem.astro';

// Navbar 
export { default as Navbar } from './lib/components/Navbar';
export type { Props as NavbarCollapseType } from './lib/components/NavbarCollapse.astro';
export type { Props as NavbarItemsType } from './lib/components/NavbarItems.astro';
export type { Props as NavbarType } from './lib/components/Navbar.astro';
export type { NavbarItemType } from './lib/components/NavbarItems.astro';
export type { Props as NavbarNavType } from './lib/components/NavbarNav.astro';
export type { Props as NavbarTogglerType } from './lib/components/NavbarToggler.astro';



// Pagination
export { default as Pagination } from './lib/components/Pagination';
export type { Props as PaginationType } from './lib/components/Pagination';
export type { Props as PaginationItemType } from './lib/components/PaginationItem';
export type { Props as PaginationLinkType } from './lib/components/PaginationLink';


// Fix up type exports from here on

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
export { default as VanishLink } from './lib/utils/VanishLink.astro';
export { default as Marked } from './lib/utils/Marked.astro';
export { default as InlineCode } from './lib/utils/InlineCode.astro';
