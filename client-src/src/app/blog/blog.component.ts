import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPostsService } from '../services/blog-posts.service';
import { BlogPost } from '../models/blog-post.type';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  title = 'Posts';
  blogPosts: BlogPost[];
  constructor(private router: Router, private blogPostsService: BlogPostsService) { }

  ngOnInit() {
    if (!sessionStorage.getItem('blog-posts')) {
      this.blogPostsService
        .getAllBlogPosts()
        .then(response => {
          this.blogPosts = response;
          sessionStorage.setItem('blog-posts', JSON.stringify(response));
        })
        .catch(err => console.log(err));
    } else {
      this.blogPosts = JSON.parse(sessionStorage.getItem('blog-posts'));
    }
  }

  onSelect(post: BlogPost) {
    this.router.navigate(['/blog', post.id]);
  }
}
