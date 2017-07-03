import { Component, OnInit } from '@angular/core';

interface NavLink {
  path: string;
  name: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  navLinks: NavLink[];
  currentLink: string;

  constructor() { }

  ngOnInit() {
    this.navLinks = [
      {
        path: '/home',
        name: 'home'
      },
      {
        path: '/blog',
        name: 'blog'
      },
      {
        path: '/profile',
        name: 'profile'
      },
      {
        path: '/project',
        name: 'project'
      },
      {
        path: '/about',
        name: 'about'
      }
    ];
    this.currentLink = 'home';
  }

  onSelect(link: NavLink) {
    this.currentLink = link.name;
  }

  isActive(link: NavLink) {
    return link.name === this.currentLink;
  }
}
