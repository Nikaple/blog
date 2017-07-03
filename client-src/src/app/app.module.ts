// angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';

// mock service
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

// external imports
import { UuidService } from './utils/uuid/uuid.service'

// material imports
import { MdTabsModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdCardModule } from '@angular/material';

// component imports
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectComponent } from './project/project.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './header/nav/nav.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { HomeProjectsComponent } from './home/home-projects/home-projects.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsService } from './services/projects.service';
import { HomeProjectComponent } from './home/home-projects/home-project/home-project.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    ProfileComponent,
    ProjectComponent,
    AboutComponent,
    HomeComponent,
    HeaderComponent,
    NavComponent,
    CarouselComponent,
    HomeProjectsComponent,
    FooterComponent,
    HomeProjectComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    BrowserAnimationsModule,
    MdTabsModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'blog',
        component: BlogComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'project',
        component: ProjectComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ])
  ],
  providers: [
    ProjectsService,
    UuidService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
