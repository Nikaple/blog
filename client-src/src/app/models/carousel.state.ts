export type CarouselState = 'left'|'center'|'right';

export const carouselState: {
  [key: string]: CarouselState;
} = {
  left: 'left',
  center: 'center',
  right: 'right'
}
