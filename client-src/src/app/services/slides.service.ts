import { Injectable } from '@angular/core';
import { Slide } from "../models/slide.type";
import { carouselState } from "../models/carousel.state";
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import { retrieveSessionStorage } from "../utils/retrieveSessionStorage";

@Injectable()
export class SlidesService {
  constructor(private http: Http) { }

  getAllSlides(): Promise<Slide[]> {
    const slides$ = this.http.get('api/slides').toPromise();
    return retrieveSessionStorage('home-slides', slides$);
  }
}
