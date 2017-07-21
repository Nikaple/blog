import { Component, OnInit } from '@angular/core';

import { MdTabsModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdSidenavContainer } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/throttleTime';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  height: number;

  constructor() { }

  ngOnInit() {
  }
}
