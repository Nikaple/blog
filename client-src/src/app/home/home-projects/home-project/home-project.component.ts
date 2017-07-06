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

  onClick($event) {
    console.log('home-project event: ', $event.target);
  }

}
