import {
  CarouselState
} from './carousel.state';

export interface Slide {
  url: string;
  alt: string;
  isActive?: boolean;
  state?: CarouselState;
}
