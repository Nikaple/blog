import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import { MdButtonModule } from '@angular/material';

import { BlogPostsService } from '../../services/blog-posts.service';
import { BlogPost } from '../../models/blog-post.type';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  posts: {
    prev: BlogPost;
    cur: BlogPost;
    next: BlogPost;
  };
  post: BlogPost;
  prevBlogExists: boolean;
  nextBlogExists: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private blogPostsService: BlogPostsService) { }

  ngOnInit() {
    // retrieve data
    this.route.params
      .switchMap((params: Params) => this.blogPostsService.getAdjacentBlogPosts(params.id))
      .subscribe(posts => {
        this.posts = posts;
        this.post = posts.cur;
        this.nextBlogExists = !!posts.next;
        this.prevBlogExists = !!posts.prev;
      });

    this.router.events.subscribe((e) => {
      if (!(e instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  // navigate to next post
  onNextPost(): void {
    this.post = null;
    this.router.navigate(['/blog', this.posts.next.id]);
  }

  // navigate to previous post
  onPrevPost(): void {
    this.post = null;
    this.router.navigate(['/blog', this.posts.prev.id]);
  }
}
