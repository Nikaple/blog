import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = '@Nikaple';
  constructor() { }

  ngOnInit() {
  }

  navToGithub() {
    window.open('https://github.com/Nikaple');
  }
}
