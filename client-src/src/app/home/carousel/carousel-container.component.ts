import {
  Component,
  OnInit,
  AfterViewInit,
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
export class CarouselContainerComponent implements OnInit, AfterViewInit {
  interval: number;
  activeSlide: Slide;
  nextSlide: Slide;
  slides: Slide[];
  // interval handle
  private slideInterval;
  constructor(private slidesService: SlidesService) { }

  ngOnInit() {
    this.interval = 1000;
    if (!sessionStorage.getItem('home-slides')) {
      this.slidesService
        .getAllSlides()
        .then(response => {
          this.slides = response;
          sessionStorage.setItem('home-slides', JSON.stringify(response));
        })
        .catch(err => console.log(err));
    } else {
      this.slides = JSON.parse(sessionStorage.getItem('home-slides'));
    }
  //   this.activeSlide = this.activeSlide || this.slides[0];
  //   this.nextSlide = this.nextSlide || this.slides[1];
    this.cycle();
  }

  ngAfterViewInit() {

  }

  // ngOnDestroy() {
  //   this.stopTimer();
  // }

  cycle() {
    this.startTimer();
  }

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

  private startTimer() {
    if (typeof this.interval === 'number' && this.interval > 0) {
      this.slideInterval = setInterval(() => {
        // this.cycleToNext();
        // console.log(1);
        // this.slides[0].isActive = true;
        // this.slides[0].state = carouselState.left;
      }, this.interval);
    }
  }

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
  //   // console.log($event, slide);
  // }
}
