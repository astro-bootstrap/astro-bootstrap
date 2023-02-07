import Carousel from './Carousel.astro';
import Controls from './CarouselControls.astro';
import Control from './CarouselControl.astro';
import Indicator from './CarouselIndicator.astro';
import Indicators from './CarouselIndicators.astro';
import Inner from './CarouselInner.astro';
import Item from './CarouselItem.astro';

export default Object.assign(Carousel, {
  Controls,
  Control,
  Indicator,
  Indicators,
  Inner,
  Item,
});
