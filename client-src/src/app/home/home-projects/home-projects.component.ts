import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { ProjectInfo } from "../../models/projectInfo";

@Component({
  selector: 'app-home-projects',
  templateUrl: './home-projects.component.html',
  styleUrls: ['./home-projects.component.css']
})

export class HomeProjectsComponent implements OnInit {
  projects: void | ProjectInfo[];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.projectsService
      .getAllProjects()
      .then(response => {
        if (!response) {
          throw Error('Fetch error: no response.')
        }
        this.projects = response.map(project => {
          return Object.assign(project, {date: new Date(project.date).toLocaleDateString()});
        });
        console.log(this.projects);
      })
      .catch(err => console.log(err));
  }

}
