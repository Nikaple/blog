import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';

import { RoutesService } from '../services/routes.service';
import { NavLink } from '../models/nav-link.type';
import { MdSidenav, MdSidenavContainer } from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  providers: [RoutesService],
  animations: [
    trigger('toggle', [
      state('opened', style({
        'background-color': 'rgba(0, 0, 0, 0.5)',
        transform: 'translateY(0)',
      })),
      state('closed', style({
        'background-color': 'transparent',
        transform: 'translateY(9999px)'
      })),
      transition('closed => opened', animate('400ms cubic-bezier(.25,.8,.25,1)', keyframes([
        style({
          transform: 'translateY(9999px)',
          'background-color': 'transparent',
          offset: 0
        }),
        style({
          transform: 'translateY(0)',
          'background-color': 'transparent',
          offset: 0.001
        }),
        style({
          transform: 'translateY(0)',
          'background-color': 'rgba(0, 0, 0, 0.5)',
          offset: 1
        }),
      ]))),
      transition('opened => closed', animate('400ms cubic-bezier(.25,.8,.25,1)', keyframes([
        style({
          transform: 'translateY(0)',
          'background-color': 'rgba(0, 0, 0, 0.5)',
          offset: 0
        }),
        style({
          transform: 'translateY(0)',
          'background-color': 'transparent',
          offset: 0.999
        }),
        style({
          transform: 'translateY(9999px)',
          'background-color': 'transparent',
          offset: 1
        })
      ]))),
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
    this.state = 'closed';
    this.navLinks = this.routesService.getRootRoutes();
    this.router.events.subscribe((e) => {
      if (!(e instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  toggle() {
    this.sidenav.toggle();
    this.state = this.sidenav.opened ? 'opened' : 'closed';
  }

  bdClick() {
    this.state = 'closed';
  }

  navToGithub() {
    window.open('https://github.com/Nikaple');
  }
}
