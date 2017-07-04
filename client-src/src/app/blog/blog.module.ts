import { NgModule }       from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent }    from './blog.component';
import { BlogPostComponent }  from './blog-post/blog-post.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogPostsService } from "../services/blog-posts.service";
import { MarkdownModule } from 'angular2-markdown';

@NgModule({
  imports: [
    BlogRoutingModule,
    CommonModule,
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
