import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Slide } from "../../models/slide.type";
import { carouselState } from "../../models/carousel.state";
import { SlidesService } from "../../services/slides.service";

@Component({
  selector: 'app-carousel-container',
  templateUrl: './carousel-container.component.html',
  styleUrls: ['./carousel-container.component.css'],
  providers: [SlidesService]
})
export class CarouselContainerComponent implements OnInit, OnDestroy {
  interval: number;
  activeSlide: Slide;
  slides: Slide[];
  clickable: boolean;
  nextSlide: Slide;
  // interval handle
  slideInterval;
  constructor(private slidesService: SlidesService) { }

  ngOnInit() {
    this.interval = 2000;
    this.slidesService
      .getAllSlides()
      .then(slides => {
        this.slides = slides;
        this.cycle();
      })
      .catch(err => console.log(err));
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  cycle() {
    if (this.slides.length < 2) {
      throw Error('At least 2 slides should be provided.');
    }
    this.activeSlide = this.activeSlide || this.slides[0];
    const activeIdx = this.getIdxBySlide(this.activeSlide);
    this.setSlideState(activeIdx, true, carouselState.center);
    this.nextSlide = this.nextSlide || this.slides[1];
    this.startTimer();
  }

  cycleToNext() {
    const nextIdx = this.getNextSlideIdx(this.getIdxBySlide(this.activeSlide));
    this.cycleToSelected(nextIdx, true);
  }

  cycleToSelected(nextIdx: number, isCycle?: boolean) {
    const activeIdx = this.getIdxBySlide(this.activeSlide);

    this.nextSlide = this.slides[nextIdx];

    this.setSlideState(activeIdx, true, carouselState.center);
    this.setSlideState(nextIdx, true, this.getNextSlideState(isCycle));
    setTimeout(() => {
      this.setSlideState(activeIdx, true, this.getActiveSlideState(isCycle));
      this.setSlideState(nextIdx, true, carouselState.center);
      this.activeSlide = this.slides[nextIdx];
    }, 1);
    this.restartTimer();
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

  private getNextSlideIdx(idx) {
    return idx === this.slides.length - 1
      ? 0
      : idx + 1
  }

  private getNextSlide(slideIdx: number): Slide {
    const nextIdx = this.getNextSlideIdx(slideIdx);
    return this.getSlideByIdx(nextIdx);
  }

  private setSlideState(slideIdx, isActive, state) {
    if (this.slides) {
      const slide = this.slides[slideIdx];
      slide.isActive = isActive;
      slide.state = state;
    }
  }

  private getNextSlideState(isCycle?: boolean) {
    const activeIdx = this.getIdxBySlide(this.activeSlide);
    const nextIdx = this.getIdxBySlide(this.nextSlide);
    if (activeIdx === this.slides.length - 1 && nextIdx === 0 && isCycle) {
      return carouselState.right;
    }
    return nextIdx === activeIdx
      ? carouselState.center
      : nextIdx > activeIdx
        ? carouselState.right
        : carouselState.left;
  }

  private getActiveSlideState(isCycle?: boolean) {
    const nextState = this.getNextSlideState(isCycle);
    switch(nextState) {
      case carouselState.left:
        return carouselState.right;
      case carouselState.center:
        return carouselState.center;
      case carouselState.right:
        return carouselState.left;
    }
  }

  private isActiveSlide(slide: Slide) {
    return this.isSameSlide(slide, this.activeSlide);
  }

  private isNextSlide(slide: Slide) {
    return this.isSameSlide(slide, this.nextSlide);
  }

  private isSameSlide(slide1: Slide, slide2: Slide) {
    return slide1.url === slide2.url;
  }
  private changeClickable($event: boolean) {
    this.clickable = $event;
  }

}
