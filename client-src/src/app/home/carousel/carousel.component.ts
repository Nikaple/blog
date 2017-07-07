import {
  Component,
  OnInit,
  AfterContentChecked,
  OnDestroy
} from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { Slide } from "../../models/slide.type";

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
  interval: number;
  activeSlide: Slide;
  slides: Slide[];
  private slideInterval;
  constructor() { }

  ngOnInit() {
    this.interval = 2000;
    this.slides = [
      {
        url: '../../../assets/imgs/example1.png',
        alt: 'example1'
      },
      {
        url: '../../../assets/imgs/example2.png',
        alt: 'example2'
      },
      {
        url: '../../../assets/imgs/example3.png',
        alt: 'example3'
      },
      {
        url: '../../../assets/imgs/example4.png',
        alt: 'example4'
      },
      {
        url: '../../../assets/imgs/example5.png',
        alt: 'example5'
      },
      {
        url: '../../../assets/imgs/example6.png',
        alt: 'example6'
      }
    ];
    this.activeSlide = this.activeSlide || this.slides[0];
    this.cycle();
  }

  ngAfterContentChecked() {
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  cycle() {
    this.startTimer();
  }

  cycleToNext() {
    this.activeSlide = this.getNextSlide(this.getIdxBySlide(this.activeSlide));
  }

  cycleToPrev() {
    this.activeSlide = this.getPrevSlide(this.getIdxBySlide(this.activeSlide));
  }

  cycleToSelected(slideIdx: number) {
    this.activeSlide = this.getSlideByIdx(slideIdx);
  }

  private restartTimer() {
    this.stopTimer();
    this.startTimer();
  }

  private startTimer() {
    if (typeof this.interval === 'number' && this.interval > 0) {
      this.slideInterval = setInterval(() => {
        this.cycleToNext();
      }, this.interval);
    }
  }

  private stopTimer() {
    clearInterval(this.slideInterval);
  }

  private getSlideByIdx(slideIdx: number): Slide {
    return this.slides[slideIdx] || this.slides[0];
  }

  private getIdxBySlide(slideToQuery: Slide): number {
    return this.slides.findIndex((slide) => {
      return slideToQuery.url === slide.url;
    });
  }

  private getNextSlide(slideIdx: number): Slide {
    const nextIdx =
      slideIdx === this.slides.length - 1
      ? 0
      : slideIdx + 1;
    return this.getSlideByIdx(nextIdx);
  }

  private getPrevSlide(slideIdx: number): Slide {
    const prevIdx =
      slideIdx === 0
      ? this.slides.length - 1
      : slideIdx - 1;
    return this.getSlideByIdx(prevIdx);
  }

  private getSlideState(slide) {
    const activeIdx = this.getIdxBySlide(this.activeSlide);
    if (this.isSameSlide(slide, this.activeSlide)) {
      return 'center';
    } else if (this.isSameSlide(slide, this.getPrevSlide(activeIdx))) {
      return 'left';
    } else if (this.isSameSlide(slide, this.getNextSlide(activeIdx))) {
      return 'right';
    } else {
      return 'inactive';
    }
  }

  private isSameSlide(slide1: Slide, slide2: Slide) {
    return slide1.url === slide2.url;
  }

  private animationDone($event) {
    // console.log($event);
  }
}
