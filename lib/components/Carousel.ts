export { default } from './CarouselDefault.astro';
export { default as Controls } from './CarouselControls.astro';
export { default as Control } from './CarouselControl.astro';
export { default as Indicators } from './CarouselIndicators.astro';

export interface Slide {
  img: string;
  alt: string;
  active?: boolean;
}
