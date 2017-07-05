import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';

import { RoutesService } from '../services/routes.service';
import { NavLink } from '../models/nav-link.type';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  providers: [RoutesService],
  animations: [
    trigger('toggle', [
      state('closed', style({
        'background-color': 'rgba(0, 0, 0, 0.5)',
      })),
      state('opened', style({
        'background-color': 'transparent',
      })),
      transition('closed => opened', animate('400ms cubic-bezier(.25,.8,.25,1)')),
      transition('opened => closed', animate('400ms cubic-bezier(.25,.8,.25,1)')),
    ])
  ]
})

export class SidenavComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MdSidenav;

  navLinks: NavLink[];
  title = '@Nikaple';
  state: string;

  constructor(private routesService: RoutesService, private router: Router) {
  }

  ngOnInit() {
    this.state = 'opened';
    this.navLinks = this.routesService.getRootRoutes();
    this.router.events.subscribe((e) => {
      if (!(e instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  toggleContainer() {
    this.state = this.sidenav.opened ? 'opened' : 'closed';
    this.sidenav.toggle();
  }

}
