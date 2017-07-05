import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MarkdownModule } from 'angular2-markdown';

import { MdCardModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';

import { BlogComponent } from './blog.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogPostsService } from '../services/blog-posts.service';

@NgModule({
  imports: [
    BlogRoutingModule,
    CommonModule,
    FlexLayoutModule,
    // material
    MdCardModule,
    MdButtonModule,
    // external
    MarkdownModule.forRoot()
  ],
  declarations: [
    BlogComponent,
    BlogPostComponent
  ],
  providers: [
    BlogPostsService
  ]
})

export class BlogModule {}
