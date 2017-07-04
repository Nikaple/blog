import { Injectable } from "@angular/core";
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UuidService } from '../utils/uuid/uuid.service';
import { ProjectInfo } from '../models/projectInfo';
import { BlogPost } from '../models/blogPost';
import { blog1 } from './mock-data/mock-blog1';
import { blog2 } from './mock-data/mock-blog2';
import { blog3 } from './mock-data/mock-blog3';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  blogposts: BlogPost[] ;
  projects: ProjectInfo[];

  constructor(private uuidService: UuidService) {}

  createDb() {
    if (!sessionStorage.getItem('home-projects')) {
      this.projects = this.getMockHomeProjects();
      sessionStorage.setItem('home-projects', JSON.stringify(this.projects));
    } else {
      this.projects = JSON.parse(sessionStorage.getItem('home-projects'));
    }
    if (!sessionStorage.getItem('blog-posts')) {
      this.blogposts= this.getMockBlogPosts();
      sessionStorage.setItem('blog-posts', JSON.stringify(this.blogposts));
    } else {
      this.blogposts = JSON.parse(sessionStorage.getItem('blog-posts'));
    }
    return {
      projects: this.projects,
      blogposts: this.blogposts
    };
  }

  getMockBlogPosts(): BlogPost[] {
    return [
      {
        id: this.uuidService.generate(),
        route: 'linux-environment',
        title: 'Linux环境搭建 —— Vagrant与VirtualBox的配置',
        date: new Date(2017, 4, 5).getTime(),
        content: blog1
      },
      {
        id: this.uuidService.generate(),
        route: 'linux-user-management',
        title: 'Linux下的用户管理 —— 查看、添加用户',
        date: new Date(2017, 2, 16).getTime(),
        content: blog2
      },
      {
        id: this.uuidService.generate(),
        route: 'markdown-syntax-test',
        title: 'markdown语法测试',
        date: new Date(2017, 1, 16).getTime(),
        content: blog3
      }
    ];
  }
  getMockHomeProjects(): ProjectInfo[] {
    return [
      {
        id: this.uuidService.generate(),
        name: 'Post Spectra',
        date: new Date(2017, 6).getTime(),
        thumbnail: '../../assets/imgs/mock_thumbnail.jpg',
        description: 'Formatting/validating NMR/HRMS spectra data',
      },
      {
        id: this.uuidService.generate(),
        name: 'Project 2',
        date: new Date(2016, 8).getTime(),
        thumbnail: '../../assets/imgs/mock_thumbnail.jpg',
        description: 'Formatting/validating NMR/HRMS spectra data',
      },
      {
        id: this.uuidService.generate(),
        name: 'Project 3',
        date: new Date(2015, 2).getTime(),
        thumbnail: '../../assets/imgs/mock_thumbnail.jpg',
        description: 'Formatting/validating NMR/HRMS spectra data',
      },
      {
        id: this.uuidService.generate(),
        name: 'Project 4',
        date: new Date(2014, 8).getTime(),
        thumbnail: '../../assets/imgs/mock_thumbnail.jpg',
        description: 'Formatting/validating NMR/HRMS spectra data' ,
      },
      {
        id: this.uuidService.generate(),
        name: 'Project 5',
        date: new Date(2015, 2).getTime(),
        thumbnail: '../../assets/imgs/mock_thumbnail.jpg',
        description: 'Formatting/validating NMR/HRMS spectra data',
      },
      {
        id: this.uuidService.generate(),
        name: 'Project 6',
        date: new Date(2014, 8).getTime(),
        thumbnail: '../../assets/imgs/mock_thumbnail.jpg',
        description: 'Formatting/validating NMR/HRMS spectra data' ,
      }
    ];
  }
}
