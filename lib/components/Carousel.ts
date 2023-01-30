import Carousel from './CarouselDefault.astro';
import CarouselControls from './CarouselControls.astro';
import CarouselControl from './CarouselControl.astro';
import CarouselIndicators from './CarouselIndicators.astro';

export default Object.assign(Carousel, {
  Controls: CarouselControls,
  Control: CarouselControl,
  Indicators: CarouselIndicators,
});
