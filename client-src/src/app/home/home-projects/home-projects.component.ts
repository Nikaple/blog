import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { ProjectInfo } from "../../models/projectInfo";

@Component({
  selector: 'app-home-projects',
  templateUrl: './home-projects.component.html',
  styleUrls: ['./home-projects.component.css']
})

export class HomeProjectsComponent implements OnInit {
  projects: any;

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    if (!sessionStorage.getItem('home-projects')) {
      this.projectsService
        .getAllProjects()
        .then(response => {
          this.projects = response;
          sessionStorage.setItem('home-projects', JSON.stringify(response));
        })
        .catch(err => console.log(err));
    } else {
      this.projects = JSON.parse(sessionStorage.getItem('home-projects'));
    }
  }
}
