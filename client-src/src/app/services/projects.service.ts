import { Injectable } from '@angular/core';
import { ProjectInfo } from '../models/project-info.type';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { retrieveSessionStorage } from "../utils/retrieveSessionStorage";

@Injectable()
export class ProjectsService {

  constructor(private http: Http) { }

  getAllProjects(): Promise<ProjectInfo[]> {
    const projects$ = this.http.get('api/projects').toPromise();
    return retrieveSessionStorage('home-projects', projects$);
  }
}
