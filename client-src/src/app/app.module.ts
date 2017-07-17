// angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';

// mock service
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

// external imports
import { UuidService } from './utils/uuid/uuid.service';
import 'hammerjs';
import 'hammer-timejs';

// material imports
import { MdTabsModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';

// component imports
import { BlogModule } from './blog/blog.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectComponent } from './project/project.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './header/nav/nav.component';
import { CarouselContainerComponent } from './home/carousel/carousel-container.component';
import { CarouselComponent } from './home/carousel/carousel/carousel.component';
import { HomeProjectsComponent } from './home/home-projects/home-projects.component';
import { FooterComponent } from './footer/footer.component';
import { HomeProjectComponent } from './home/home-projects/home-project/home-project.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { BlogPostsService } from './services/blog-posts.service';
import { ProjectsService } from './services/projects.service';
import { RoutesService } from './services/routes.service';
import { SlidesService } from './services/slides.service';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    // header
    HeaderComponent,
    NavComponent,
    // home
    HomeComponent,
    CarouselContainerComponent,
    CarouselComponent,
    HomeProjectsComponent,
    HomeProjectComponent,
    // profile
    ProfileComponent,
    // project
    ProjectComponent,
    // about
    AboutComponent,
    // footer
    FooterComponent,
    // not found
    NotFoundComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    HttpModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    BrowserAnimationsModule,
    // material
    MdTabsModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdSidenavModule,
    // routing
    BlogModule,
    AppRoutingModule,
  ],
  providers: [
    ProjectsService,
    RoutesService,
    SlidesService,
    UuidService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
