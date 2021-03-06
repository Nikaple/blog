import {
  CarouselState
} from './carousel.state';

export interface Slide {
  _id: string;
  index: number;
  url: string;
  alt: string;
  isActive?: boolean;
  state?: CarouselState;
  fromState?: CarouselState;
  toState?: CarouselState;
}
