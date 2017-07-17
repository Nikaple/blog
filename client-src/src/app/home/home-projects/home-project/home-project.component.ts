import { Component, OnInit, Input } from '@angular/core';
import { ProjectInfo } from '../../../models/project-info.type';
import { MdCardModule } from '@angular/material';

@Component({
  selector: 'app-home-project',
  templateUrl: './home-project.component.html',
  styleUrls: ['./home-project.component.css']
})

export class HomeProjectComponent implements OnInit {
  @Input() project: ProjectInfo;
  constructor() { }

  ngOnInit() {

  }

  onClickImage(project) {
    window.open(project.link);
  }

}
