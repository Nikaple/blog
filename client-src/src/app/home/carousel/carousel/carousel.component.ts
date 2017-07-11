import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  AnimationTransitionEvent,
  EventEmitter
} from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { Slide } from "../../../models/slide.type";
import { carouselState } from "../../../models/carousel.state";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [
    trigger('flyInOut', [
      state(carouselState.left, style({
        transform: 'translateX(-100%)',
      })),
      state(carouselState.center, style({
        transform: 'translateX(0)',
      })),
      state(carouselState.right, style({
        transform: 'translateX(100%)',
      })),
      // state('inactive', style({
      //   transform: 'translateX(0)',
      //   visibility: 'hidden'
      // })),
      transition('center <=> *', [
        animate('1000ms ease')
      ]),
      transition('void => *', [
        animate(1)
      ]),
      // transition('inactive <=> left', [
      //   animate(1)
      // ]),
      // transition('inactive <=> right', [
      //   animate(1)
      // ]),
      // transition('right <=> left', [
      //   animate(1)
      // ])
    ])
  ],
})
export class CarouselComponent implements OnInit {
  @Input() slide: Slide;
  @Output() clickable = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.slide.isActive = this.slide.isActive || false;
  }

  // private getSlideState(slide) {
  //   const activeIdx = this.getIdxBySlide(this.activeSlide);
  //   if (this.isSameSlide(slide, this.activeSlide)) {
  //     return carouselState.active.center;
  //   } else {
  //     return carouselState.inactive;
  //   }
  // }

  // private getSlideDirection(slide) {
  //   const activeIdx = this.getIdxBySlide(this.activeSlide);
  //   const thisIdx = this.getIdxBySlide(slide);
  //   return thisIdx >= activeIdx ? CarouselDirection.Right : CarouselDirection.Left;
  // }

  // private isActiveSlide(slide: Slide) {
  //   return this.isSameSlide(slide, this.activeSlide);
  // }

  // private isNextSlide(slide: Slide) {
  //   return this.isSameSlide(slide, this.nextSlide);
  // }

  // private isSameSlide(slide1: Slide, slide2: Slide) {
  //   return slide1.url === slide2.url;
  // }

  private transitionStart($event, slide) {
    // console.log('transitionStart');
    this.clickable.emit(false);
  }

  private transitionDone($event: AnimationTransitionEvent, slide: Slide) {
    if ($event.fromState === carouselState.center) {
      if ($event.toState === carouselState.left || $event.toState === carouselState.right) {
        slide.isActive = false;
        slide.state = carouselState.center;
      }
    }
    // console.log('transitionDone');
    this.clickable.emit(true);
  }
}
