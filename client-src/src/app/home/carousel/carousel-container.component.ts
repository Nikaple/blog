import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Slide } from '../../models/slide.type';
import { carouselState } from '../../models/carousel.state';
import { SlidesService } from '../../services/slides.service';
import { MD_TABLET_AND_MOBILE_WIDTH } from '../../utils/config';

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
  nextSlide: Slide;
  clickable: boolean;
  // interval handle
  slideInterval;
  icons: {
    left: string;
    right: string;
  }
  constructor(private slidesService: SlidesService) { }

  ngOnInit() {
    this.interval = 5000;
    this.clickable = true;
    this.icons = {
      left: 'fa-arrow-circle-o-left',
      right: 'fa-arrow-circle-o-right'
    }
    this.slidesService.getAllSlides()
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
    this.startTimer();
  }

  cycleToNext() {
    const nextIdx = this.getNextSlideIdx(this.getIdxBySlide(this.activeSlide));
    this.nextSlide = this.slides[nextIdx];
    this.cycleToSelected(nextIdx, true);
  }

  cycleToPrev() {
    const prevIdx = this.getPrevSlideIdx(this.getIdxBySlide(this.activeSlide));
    this.nextSlide = this.slides[prevIdx];
    this.cycleToSelected(prevIdx, true);
  }

  cycleToSelected(nextIdx: number, isCycle?: boolean) {
    const activeIdx = this.getIdxBySlide(this.activeSlide);
    if (nextIdx === activeIdx) {
      return;
    }
    this.nextSlide = this.slides[nextIdx];
    if (this.clickable) {
      const nextState = this.getNextSlideState(isCycle);
      const activeState = this.getActiveSlideState(nextState, isCycle);
      this.setSlideState(nextIdx, true, nextState, carouselState.center);
      this.setSlideState(activeIdx, true, carouselState.center, activeState);
      this.activeSlide = this.slides[nextIdx];
    }
  }

  pause() {
    this.stopTimer();
  }

  onPanLeft($event) {
    if (innerWidth < MD_TABLET_AND_MOBILE_WIDTH) {
      this.cycleToNext();
    }
  }

  onPanRight($event) {
    if (innerWidth < MD_TABLET_AND_MOBILE_WIDTH) {
      this.cycleToPrev();
    }
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
      : idx + 1;
  }

  private getPrevSlideIdx(idx) {
    return idx === 0
      ? this.slides.length - 1
      : idx - 1;
  }

  private getNextSlide(slideIdx: number): Slide {
    const nextIdx = this.getNextSlideIdx(slideIdx);
    return this.getSlideByIdx(nextIdx);
  }

  private setSlideState(slideIdx, isActive, state, toState) {
    if (this.slides) {
      const slide = this.slides[slideIdx];
      slide.isActive = isActive;
      slide.state = state;
      slide.toState = toState;
    }
  }

  private getNextSlideState(isCycle?: boolean) {
    const activeIdx = this.getIdxBySlide(this.activeSlide);
    const nextIdx = this.getIdxBySlide(this.nextSlide);
    if (activeIdx === this.slides.length - 1 && nextIdx === 0 && isCycle) {
      return carouselState.right;
    }
    if (activeIdx === 0 && nextIdx === this.slides.length - 1 && isCycle) {
      return carouselState.left;
    }
    return nextIdx === activeIdx
      ? carouselState.center
      : nextIdx > activeIdx
        ? carouselState.right
        : carouselState.left;
  }

  private getActiveSlideState(nextState, isCycle?: boolean) {
    switch (nextState) {
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
