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
import { BlogPostComponent } from './blog/blog-post/blog-post.component';
import { BlogPostsService } from "./services/blog-posts.service";
import { NotFoundComponent } from './not-found/not-found.component';
import { BlogModule } from "./blog/blog.module";

@NgModule({
  declarations: [
    AppComponent,
    // header
    HeaderComponent,
    NavComponent,
    // home
    HomeComponent,
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
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    BrowserAnimationsModule,
    // material
    MdTabsModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    // routing
    BlogModule,
    AppRoutingModule,
  ],
  providers: [
    ProjectsService,
    UuidService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
