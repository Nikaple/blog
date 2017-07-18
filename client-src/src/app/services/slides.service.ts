import { Injectable } from '@angular/core';
import { Slide } from '../models/slide.type';
import { carouselState } from '../models/carousel.state';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { retrieveSessionStorage } from '../utils/retrieveSessionStorage';
import { HOST, ENV } from '../utils/config';

@Injectable()
export class SlidesService {
  endPoint = 'slides';
  storageKey = 'home-slides';

  constructor(private http: Http) { }

  // InMemoryWebAPI
  // getAllSlides(): Promise<Slide[]> {

  // }

  getAllSlides(): Promise<Slide[]> {
    if (ENV === 'dev') {
      const slides$ = this.http.get(HOST + this.endPoint).toPromise();
      return retrieveSessionStorage(this.storageKey, slides$);
    } else {
      const post$ = this.http.get(HOST + this.endPoint)
        .map((res: any) => {
          return JSON.parse(res._body);
        })
        .toPromise();
      return retrieveSessionStorage(this.storageKey, post$);
    }
  }
}
