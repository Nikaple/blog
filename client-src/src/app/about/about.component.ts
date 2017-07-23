import { Component, OnInit } from '@angular/core';
import { DependencyInfo } from "../models/dependency-info";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  deps: DependencyInfo[];
  constructor() { }

  ngOnInit() {
    this.deps = [
      {
        name: "Mongo DB",
        img: 'http://ot8662avo.bkt.clouddn.com/17-7-23/50874541.jpg',
        description: 'document-oriented database system',
        link: 'https://www.mongodb.com/'
      },
      {
        name: 'Express',
        img: 'http://ot8662avo.bkt.clouddn.com/17-7-23/48547318.jpg',
        description: 'back-end framework',
        link: 'https://expressjs.com/'
      },
      {
        name: 'Angular',
        img: 'http://ot8662avo.bkt.clouddn.com/17-7-23/68299563.jpg',
        description: 'front-end framework',
        link: 'https://angular.io/'
      },
      {
        name: 'Node.js',
        img: 'http://ot8662avo.bkt.clouddn.com/17-7-23/40386394.jpg',
        description: 'back-end runtime environment',
        link: 'https://nodejs.org/',
      }
    ];
  }

  onClickImg(dep) {
    window.open(dep.link);
  }
}
