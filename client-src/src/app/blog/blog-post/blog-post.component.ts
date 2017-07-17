import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import { MdButtonModule } from '@angular/material';
import { MarkdownService } from 'angular2-markdown';

import { BlogPostsService } from '../../services/blog-posts.service';
import { BlogPost } from '../../models/blog-post.type';

import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})

export class BlogPostComponent implements OnInit, OnDestroy {
  posts: {
    prev: BlogPost;
    cur: BlogPost;
    next: BlogPost;
  };
  post: BlogPost;
  prevBlogExists: boolean;
  nextBlogExists: boolean;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogPostsService: BlogPostsService,
    private markdownService: MarkdownService
  ) { }

  ngOnInit() {
    this.customizeLink();
    this.subscription = this.route.params
      .switchMap((params: Params) => this.blogPostsService.getAdjacentBlogPosts(params.id))
      .subscribe(posts => {
        this.posts = posts;
        this.post = posts.cur;
        this.nextBlogExists = !!posts.next;
        this.prevBlogExists = !!posts.prev;
      });

    // scroll to top when navigating
    this.router.events.subscribe((e) => {
      if (!(e instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  // prevent memory leak
  ngOnDestroy() {
    this.subscription.unsubscribe();
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

  customizeLink() {
    this.markdownService.renderer.link = function(href, title, text) {
      let prot;
      if (this.options.sanitize) {
        try {
          prot = decodeURIComponent(unescape(href))
            .replace(/[^\w:]/g, '')
            .toLowerCase();
        } catch (e) {
          return '';
        }
        if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
          return '';
        }
      }
      let out = '<a href="' + href + '"';
      if (title) {
        out += ' title="' + title + '"';
      }
      out += 'target="_blank">' + text + '</a>';
      return out;
      function unescape(html) {
        // explicitly match decimal, hex, and named HTML entities
        return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g, function(_, n) {
          n = n.toLowerCase();
          if (n === 'colon') {
            return ':';
          }
          if (n.charAt(0) === '#') {
            return n.charAt(1) === 'x'
              ? String.fromCharCode(parseInt(n.substring(2), 16))
              : String.fromCharCode(+n.substring(1));
          }
          return '';
        });
      }
    }
  }
}
