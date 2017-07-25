import { Component, OnInit } from '@angular/core';
import { ProjectInfo } from '../models/project-info.type';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  frontEndProjects: ProjectInfo[];
  gamemakerProjects: ProjectInfo[];
  constructor(private projectService: ProjectsService) { }

  ngOnInit() {
    this.projectService.getAllProjects()
      .then((projects) => {
        this.frontEndProjects = projects.filter(project => project.category === 'front-end');
        this.gamemakerProjects = projects.filter(project => project.category === 'gamemaker');
      })
      .catch(err => console.log(err));
  }

  onClickImage(project: ProjectInfo) {
    window.open(project.previewLink || project.link);
  }

  onClickMarkdown($event: Event) {
    $event.preventDefault();
    const target = $event.target as HTMLAnchorElement;
    if (target.tagName === 'A') {
      window.open(target.href);
    }
  }
}
