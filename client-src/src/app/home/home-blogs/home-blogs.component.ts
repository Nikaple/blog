import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPostsService } from '../../services/blog-posts.service';
import { BlogPost } from '../../models/blog-post.type';


@Component({
  selector: 'app-home-blogs',
  templateUrl: './home-blogs.component.html',
  styleUrls: ['./home-blogs.component.css'],
  providers: [ BlogPostsService ]
})
export class HomeBlogsComponent implements OnInit {
  blogPosts: BlogPost[];
  blogNum: number;
  constructor(private blogPostsService: BlogPostsService, private router: Router) { }

  ngOnInit() {
    this.blogNum = 3;
    this.blogPostsService.getAllBlogPosts()
      .then(posts => {
        posts.forEach((blogPost: BlogPost) => {
          const { title, description } = this.blogPostsService.splitBlogData(blogPost.content);
          blogPost.title = title;
          blogPost.description = description;
          return blogPost;
        })
        this.blogPosts = posts.slice(0, this.blogNum);
      })
      .catch(err => console.log(err));
  }

  onSelect(post: BlogPost) {
    this.router.navigate(['/blog', post._id]);
  }
}
