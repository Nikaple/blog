import { Injectable } from '@angular/core';
import { Slide } from "../models/slide.type";
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SlidesService {
  constructor(private http: Http) { }

  getAllSlides(): Promise<Slide[]> {
    return this.http
    .get('api/projects')
    .toPromise()
    .then(response => {
      console.log(response);
      return response.json().data as Slide[];
    })
    .catch(err => console.log(err));
  }
}
