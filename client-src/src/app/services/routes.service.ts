import { Injectable } from '@angular/core';
import { NavLink } from '../models/nav-link.type';

@Injectable()
export class RoutesService {

  constructor() { }

  getRootRoutes(): NavLink[] {
    return [
      {
        path: '/home',
        name: 'home'
      },
      {
        path: '/blog',
        name: 'blog'
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
  }
}
