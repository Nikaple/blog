import { Injectable } from '@angular/core';
import { BlogPost } from '../models/blogPost';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BlogPostsService {

  constructor(private http: Http) { }

  getAllBlogPosts(): Promise<BlogPost[]> {
    return this.http
    .get('api/blogposts')
    .toPromise()
    .then(response => {
      return response.json().data as BlogPost[];
    })
    .catch(err => console.log(err));
  }

  getBlogPostById(id): Promise<BlogPost> {
    return this.http
    .get('api/blogposts')
    .toPromise()
    .then(response => {
      return response.json().data.filter(blog => id === blog.id)[0] as BlogPost;
    })
  }
}
