import Carousel from './CarouselDefault.astro';
import Controls from './CarouselControls.astro';
import Control from './CarouselControl.astro';
import Indicators from './CarouselIndicators.astro';
import Item from './CarouselItem.astro';

export default Object.assign(Carousel, {
  Controls,
  Control,
  Indicators,
  Item,
});
