import { Injectable } from '@angular/core';
import { Slide } from "../models/slide.type";
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SlidesService {
  slides: Slide[];

  constructor(private http: Http) { }

  getAllSlides(): Promise<Slide[]> {
    if (!sessionStorage.getItem('home-slides')) {
      return this.http
        .get('api/projects')
        .toPromise()
        .then(response => {
          this.slides = response.json().data as Slide[];
          sessionStorage.setItem('home-slides', JSON.stringify(this.slides));
          return this.slides;
        })
        .catch(err => console.log(err));
    } else {
      this.slides = JSON.parse(sessionStorage.getItem('home-slides'));
      return Promise.resolve(this.slides);
    }
  }
}
