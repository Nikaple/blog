import { Injectable } from '@angular/core';
import { BlogPost } from '../models/blog-post.type';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { retrieveSessionStorage } from "../utils/retrieveSessionStorage";

@Injectable()
export class BlogPostsService {

  constructor(private http: Http) { }

  getAllBlogPosts(): Promise<BlogPost[]> {
    const post$ = this.http.get('api/blogposts').toPromise();
    return retrieveSessionStorage('blog-posts', post$);
  }

  getBlogPostById(id): Promise<BlogPost> {
    return this.getAllBlogPosts()
    .then(posts => {
      return posts.filter(post => id === post.id)[0] as BlogPost;
    })
    .catch(err => console.log(err));
  }

  getAdjacentBlogPosts(id): Promise<{
    prev: BlogPost;
    cur: BlogPost;
    next: BlogPost;
  }> {
    return this.getAllBlogPosts()
    .then(posts => {
      const index = posts.findIndex(post => id === post.id);
      return {
        prev: posts[index - 1],
        cur: posts[index],
        next: posts[index + 1]
      };
    })
    .catch(err => console.log(err));
  }

  getNextBlogPost(id): Promise<BlogPost> {
    return this.getAllBlogPosts()
    .then(posts => {
      const index = posts.findIndex(post => id === post.id);
      return posts[index + 1];
    })
    .catch(err => console.log(err));
  }

  getPrevBlogPost(id): Promise<BlogPost> {
    return this.getAllBlogPosts()
    .then(posts => {
      const index = posts.findIndex(post => id === post.id);
      return posts[index - 1];
    })
    .catch(err => console.log(err));
  }
}
