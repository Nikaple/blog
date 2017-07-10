import {
  Component,
  OnInit,
  OnDestroy,
  Input
} from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { Slide } from "../../../models/slide.type";

const carouselState = {
  active: {
    left: 'left',
    center: 'center',
    right: 'right',
  },
  inactive: 'inactive'
}

enum CarouselDirection {
  Left = 0,
  Right
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [
    trigger('flyInOut', [
      state('left', style({
        transform: 'translateX(-100%)',
      })),
      state('center', style({
        transform: 'translateX(0)',
      })),
      state('right', style({
        transform: 'translateX(100%)',
      })),
      state('inactive', style({
        transform: 'translateX(0)',
        visibility: 'hidden'
      })),
      transition('center <=> *', [
        animate('1000ms ease')
      ]),
      transition('inactive <=> left', [
        animate(1)
      ]),
      transition('inactive <=> right', [
        animate(1)
      ]),
      transition('right <=> left', [
        animate(1)
      ])
    ])
  ],
})
export class CarouselComponent implements OnInit {
  @Input() slide: Slide;
  interval: number;
  activeSlide: Slide;
  nextSlide: Slide;
  slides: Slide[];
  // interval handle
  private slideInterval;
  constructor() { }

  ngOnInit() {
    this.interval = 2000;
    // this.cycle();
  }

  // ngAfterContentChecked() {
  // }

  // ngOnDestroy() {
  //   this.stopTimer();
  // }

  // cycle() {
  //   this.startTimer();
  // }

  // cycleToNext() {
  //   this.nextSlide = this.getNextSlide(this.getIdxBySlide(this.activeSlide));
  // }

  // cycleToPrev() {
  //   this.nextSlide = this.getPrevSlide(this.getIdxBySlide(this.activeSlide));
  // }

  // cycleToSelected(slideIdx: number) {
  //   this.nextSlide = this.getSlideByIdx(slideIdx);
  // }

  // private restartTimer() {
  //   this.stopTimer();
  //   this.startTimer();
  // }

  // private startTimer() {
  //   if (typeof this.interval === 'number' && this.interval > 0) {
  //     this.slideInterval = setInterval(() => {
  //       this.cycleToNext();
  //     }, this.interval);
  //   }
  // }

  // private stopTimer() {
  //   clearInterval(this.slideInterval);
  // }

  // private getSlideByIdx(slideIdx: number): Slide {
  //   return this.slides[slideIdx] || this.slides[0];
  // }

  // private getIdxBySlide(slideToQuery: Slide): number {
  //   return this.slides.findIndex((slide) => {
  //     return slideToQuery.url === slide.url;
  //   });
  // }

  // private getNextSlide(slideIdx: number): Slide {
  //   const nextIdx =
  //     slideIdx === this.slides.length - 1
  //     ? 0
  //     : slideIdx + 1;
  //   return this.getSlideByIdx(nextIdx);
  // }

  // private getPrevSlide(slideIdx: number): Slide {
  //   const prevIdx =
  //     slideIdx === 0
  //     ? this.slides.length - 1
  //     : slideIdx - 1;
  //   return this.getSlideByIdx(prevIdx);
  // }

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

  // private animationStarted($event, slide) {
  //   const flyDirection = this.getSlideDirection(slide);
  //   console.log(CarouselDirection[flyDirection]);
  // }

  // private animationDone($event, slide) {
    // console.log($event, slide);
  // }
}
