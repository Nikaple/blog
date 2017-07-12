import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  AnimationTransitionEvent,
  EventEmitter,
  AfterContentChecked,
  AfterViewChecked,
  OnChanges,
  DoCheck
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
      transition('center <=> *', [
        animate('1000ms ease')
      ]),
      transition('void => *', [
        animate(1)
      ]),
    ])
  ],
})
export class CarouselComponent implements OnInit, AfterViewChecked {
  @Input() slide: Slide;
  @Output() clickable = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.slide.isActive = this.slide.isActive || false;
  }

  ngAfterViewChecked() {
    // console.log(`when check, ${this.slide.alt} have an ${this.slide.isActive ? 'active' : 'inactive'} state ${this.slide.state}, with toState ${this.slide.toState}`);
    this.slide.state = this.slide.toState || this.slide.state;
  }

  private transitionStart($event, slide) {
    this.clickable.emit(false);
  }

  private transitionDone($event: AnimationTransitionEvent, slide: Slide) {
    // console.log(`animation of ${slide.alt} from state ${$event.fromState} to state ${$event.toState}`);
    if ($event.fromState === carouselState.center) {
      if ($event.toState === carouselState.left || $event.toState === carouselState.right) {
        slide.isActive = false;
        slide.state = carouselState.center;
      }
    }
    slide.toState = null;
    this.clickable.emit(true);
  }
}
