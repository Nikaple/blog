import { Component } from '@angular/core';
import { MdTabsModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  height = innerHeight;
}
