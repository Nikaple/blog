import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MarkdownModule, MarkdownService } from 'angular2-markdown';

import { MdCardModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdProgressSpinnerModule } from '@angular/material';

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
    MdProgressSpinnerModule,
    // external
    MarkdownModule.forRoot()
  ],
  declarations: [
    BlogComponent,
    BlogPostComponent
  ],
  providers: [
    BlogPostsService,
    MarkdownService
  ]
})

export class BlogModule {}
