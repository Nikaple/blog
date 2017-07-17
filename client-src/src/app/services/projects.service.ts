import { Injectable } from '@angular/core';
import { ProjectInfo } from '../models/project-info.type';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { retrieveSessionStorage } from '../utils/retrieveSessionStorage';
import { HOST } from '../utils/host';


@Injectable()
export class ProjectsService {
  endPoint = 'projects';
  storageKey = 'home-projects';
  constructor(private http: Http) { }

  // getAllProjects(): Promise<ProjectInfo[]> {
  //   const projects$ = this.http.get(HOST + this.endPoint).toPromise();
  //   return retrieveSessionStorage(this.storageKey, projects$);
  // }

  // Real world data
  getAllProjects(): Promise<ProjectInfo[]> {
    const post$ = this.http.get(HOST + this.endPoint)
      .map((res: any) => {
        return JSON.parse(res._body);
      })
      .toPromise();
    return retrieveSessionStorage(this.storageKey, post$);
  }
}
