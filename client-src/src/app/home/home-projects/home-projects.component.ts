import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { ProjectInfo } from '../../models/project-info.type';

@Component({
  selector: 'app-home-projects',
  templateUrl: './home-projects.component.html',
  styleUrls: ['./home-projects.component.css'],
  providers: [ProjectsService]
})

export class HomeProjectsComponent implements OnInit {
  projects: ProjectInfo[];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.projectsService.getAllProjects()
      .then(projects => this.projects = projects.slice(0, 6))
      .catch(err => console.log(err));
  }
}
