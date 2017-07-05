import { Injectable } from '@angular/core';
import { ProjectInfo } from '../models/project-info.type';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProjectsService {

  constructor(private http: Http) { }

  getAllProjects(): Promise<ProjectInfo[]> {
    return this.http
    .get('api/projects')
    .toPromise()
    .then(response => {
      return response.json().data as ProjectInfo[];
    })
    .catch(err => console.log(err));
  }
}
