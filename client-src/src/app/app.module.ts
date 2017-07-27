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
import 'hammerjs';
import 'hammer-timejs';
import { MarkdownModule } from 'angular2-markdown';

// material imports
import {
  MdTabsModule,
  MdIconModule,
  MdButtonModule,
  MdCardModule,
  MdSidenavModule
} from '@angular/material';

// module imports
import { BlogModule } from './blog/blog.module';
// component imports
import { AppComponent } from './app.component';
// 1st-grade imports
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectComponent } from './project/project.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NotFoundComponent } from './not-found/not-found.component';
// header sub-components
import { NavComponent } from './header/nav/nav.component';
// home sub-components
import { CarouselContainerComponent } from './home/carousel/carousel-container.component';
import { CarouselComponent } from './home/carousel/carousel/carousel.component';
import { HomeBlogsComponent } from './home/home-blogs/home-blogs.component';
import { HomeProjectsComponent } from './home/home-projects/home-projects.component';
import { HomeProjectComponent } from './home/home-projects/home-project/home-project.component';
// blog sub-components
import { BlogPostComponent } from './blog/blog-post/blog-post.component';

import { BlogPostsService } from './services/blog-posts.service';
import { ProjectsService } from './services/projects.service';
import { RoutesService } from './services/routes.service';
import { SlidesService } from './services/slides.service';

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
    SidenavComponent,
    HomeBlogsComponent
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
    // external
    MarkdownModule.forRoot(),
    // routing
    BlogModule,
    AppRoutingModule,
  ],
  providers: [
    ProjectsService,
    RoutesService,
    SlidesService,
    BlogPostsService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
