import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BlogPostsService } from "../../services/blog-posts.service";
import { BlogPost } from "../../models/blogPost";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  post: BlogPost;

  constructor(private route: ActivatedRoute, private router: Router, private blogPostsService: BlogPostsService) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.blogPostsService.getBlogPostById(params['id']))
      .subscribe(post => this.post = post);
  }

}
