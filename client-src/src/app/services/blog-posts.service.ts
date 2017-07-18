import { Injectable } from '@angular/core';
import { BlogPost } from '../models/blog-post.type';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { retrieveSessionStorage } from '../utils/retrieveSessionStorage';
import { HOST, ENV } from '../utils/config';

interface AdjacentPosts {
  prev: BlogPost | null;
  cur: BlogPost;
  next: BlogPost | null;
}

@Injectable()
export class BlogPostsService {
  endPoint = 'blogposts';
  storageKey = 'blog-posts';
  constructor(private http: Http) { }

  getAllBlogPosts(): Promise<BlogPost[]> {
    if (ENV === 'dev') {
      // In memory web API
      const post$ = this.http.get('api/blogposts').toPromise();
      return retrieveSessionStorage('blog-posts', post$);
    } else {
      // Server API
      const post$ = this.http.get(HOST + this.endPoint)
        .map((res: any) => {
          return JSON.parse(res._body);
        })
        .toPromise();
      return retrieveSessionStorage(this.storageKey, post$);
    }
  }

  getBlogPostById(id): Promise<BlogPost> {
    return this.getAllBlogPosts()
      .then(posts => {
        return posts.filter(post => id === post.id)[0];
      })
      .catch(err => console.log(err)) as Promise<BlogPost>;
  }

  getAdjacentBlogPosts(id): Promise<AdjacentPosts> {
    return this.getAllBlogPosts()
    .then(posts => {
      const index = posts.findIndex(post => id === post.id);
      return {
        prev: posts[index - 1],
        cur: posts[index],
        next: posts[index + 1]
      };
    })
    .catch(err => console.log(err)) as Promise<AdjacentPosts>;
  }

  getNextBlogPost(id): Promise<BlogPost | null> {
    return this.getAllBlogPosts()
    .then(posts => {
      const index = posts.findIndex(post => id === post.id);
      return posts[index + 1];
    })
    .catch(err => console.log(err)) as Promise<BlogPost | null>;
  }

  getPrevBlogPost(id): Promise<BlogPost | null> {
    return this.getAllBlogPosts()
    .then(posts => {
      const index = posts.findIndex(post => id === post.id);
      return posts[index - 1] || null;
    })
    .catch(err => console.log(err)) as Promise<BlogPost | null>;
  }
}
