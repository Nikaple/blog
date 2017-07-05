import { Component, OnInit } from '@angular/core';
import { RoutesService } from '../../services/routes.service';

interface NavLink {
  path: string;
  name: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [RoutesService]
})

export class NavComponent implements OnInit {
  navLinks: NavLink[];
  currentLink: string;

  constructor(private routesSerivce: RoutesService) { }

  ngOnInit() {
    this.navLinks = this.routesSerivce.getRootRoutes();
  }

  onSelect(link: NavLink) {
  }
}
