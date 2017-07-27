import { Injectable } from '@angular/core';
import { BlogPost } from '../models/blog-post.type';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { retrieveSessionStorage } from '../utils/retrieveSessionStorage';
import { HOST, ENV } from '../utils/config';
import { MarkdownService } from 'angular2-markdown';

interface AdjacentPosts {
  prev: BlogPost | null;
  cur: BlogPost;
  next: BlogPost | null;
}

@Injectable()
export class BlogPostsService {
  endPoint = 'blogposts/';
  storageKey = 'blog-posts';
  constructor(private http: Http, private markdownService: MarkdownService) { }

  getAllBlogPosts(): Promise<BlogPost[]> {
    if (ENV === 'dev') {
      // In memory web API
      const post$ = this.http.get('api/blogposts').toPromise();
      return retrieveSessionStorage('blog-posts', post$);
    } else {
      // Server API
      return retrieveSessionStorage(
        this.storageKey,
        this.http.get(HOST + this.endPoint)
          .map((res: any) => {
            return res._body;
          })
          .toPromise()
        );
    }
  }

  getBlogPostById(id): Promise<BlogPost> {
    if (ENV === 'dev') {
      return this.getAllBlogPosts()
        .then(posts => {
          return posts.filter(post => id === post._id)[0];
        })
        .catch(err => console.log(err)) as Promise<BlogPost>;
    } else {
      // Server API
      const post$ = this.http.get(HOST + this.endPoint + id)
        .toPromise().then(res => console.log(res));
      console.log(post$);
    }
  }

  getAdjacentBlogPosts(id): Promise<AdjacentPosts> {
    return this.getAllBlogPosts()
    .then(posts => {
      const index = posts.findIndex(post => id === post._id);
      return {
        prev: posts[index - 1],
        cur: posts[index],
        next: posts[index + 1]
      };
    })
    .catch(err => console.log(err)) as Promise<AdjacentPosts>;
  }

  getNextBlogPost(id): Promise<BlogPost|void> {
    return this.getAllBlogPosts()
    .then(posts => {
      const index = posts.findIndex(post => id === post._id);
      return posts[index + 1];
    })
    .catch(err => console.log(err));
  }

  getPrevBlogPost(id): Promise<BlogPost|void> {
    return this.getAllBlogPosts()
    .then(posts => {
      const index = posts.findIndex(post => id === post._id);
      return posts[index - 1] || null;
    })
    .catch(err => console.log(err));
  }

  splitBlogData(blog: string) {
    const titleMatch = blog.match(/#+.+\n/);
    // head should only contain # markups
    const title = titleMatch[0].replace(/#+/, '');
    const bodyMarked = blog.substring(titleMatch.index + titleMatch[0].length, blog.length - 1);
//  console.log("bodyMarked ", bodyMarked);
    const bodyHTML = this.markdownService.compile(bodyMarked);
    const removeReg = /<[\s\S]+?>/g;
    const description = bodyHTML.replace(removeReg, '');
    return { title, description };
  }
}
