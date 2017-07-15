import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UuidService } from '../utils/uuid/uuid.service';
import { ProjectInfo } from '../models/project-info.type';
import { BlogPost } from '../models/blog-post.type';
import { carouselState } from "../models/carousel.state";
import { Slide } from "../models/slide.type";
import { blog1 } from './mock-data/mock-blog1';
import { blog2 } from './mock-data/mock-blog2';
import { blog3 } from './mock-data/mock-blog3';
import { blog4 } from './mock-data/mock-blog4';
import { blog5 } from './mock-data/mock-blog5';
import { blog6 } from './mock-data/mock-blog6';
import { blog7 } from './mock-data/mock-blog7';
import { blog8 } from './mock-data/mock-blog8';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  blogposts: BlogPost[] ;
  projects: ProjectInfo[];
  slides: Slide[];

  constructor(private uuidService: UuidService) {}

  createDb() {
    return {
      slides: this.getMockHomeSlides(),
      projects: this.getMockHomeProjects(),
      blogposts: this.getMockBlogPosts()
    };
  }

  getMockHomeSlides(): Slide[] {
    const slides: Slide[] = [
      {
        url: '../../../assets/imgs/carousel1.jpg',
        alt: 'example1',
      },
      {
        url: '../../../assets/imgs/example2.png',
        alt: 'example2',
      },
      {
        url: '../../../assets/imgs/example3.png',
        alt: 'example3'
      },
      {
        url: '../../../assets/imgs/example4.png',
        alt: 'example4'
      },
      {
        url: '../../../assets/imgs/example5.png',
        alt: 'example5'
      },
      {
        url: '../../../assets/imgs/example6.png',
        alt: 'example6'
      }
    ];
    return slides.map((slide, index) => {
      slide.isActive = index === 0 ? true : false;
      slide.state = carouselState.center;
      return slide;
    });
  }

  getMockHomeProjects(): ProjectInfo[] {
    return [
      {
        id: this.uuidService.generate(),
        name: 'Post Spectra',
        date: new Date(2017, 4, 10).getTime(),
        thumbnail: '../../assets/imgs/project1.jpg',
        description: 'Produce your SI easier.',
        link: 'https://nikaple.github.io/',
      },
      {
        id: this.uuidService.generate(),
        name: '3D Barrage Designer',
        date: new Date(2016, 2, 15).getTime(),
        thumbnail: '../../assets/imgs/project2.jpg',
        description: 'Design your own 3d barrages!',
        link: 'https://nikaple.github.io/3d-barrage-designer'
      },
      {
        id: this.uuidService.generate(),
        name: 'JS Calculator',
        date: new Date(2015, 12, 28).getTime(),
        thumbnail: '../../assets/imgs/project3.jpg',
        description: 'A simple calculator powered by JS.',
        link: 'https://nikaple.github.io/javascript-calculator',
      }
    ];
  }

  getMockBlogPosts(): BlogPost[] {
    return [
      {
        id: this.uuidService.generate(),
        title: 'Linux环境搭建 —— Vagrant与VirtualBox的配置',
        date: new Date(2017, 4, 5).getTime(),
        content: blog1
      },
      {
        id: this.uuidService.generate(),
        title: 'Linux下的用户管理 —— 查看、添加用户',
        date: new Date(2017, 2, 16).getTime(),
        content: blog2
      },
      {
        id: this.uuidService.generate(),
        title: 'markdown语法测试',
        date: new Date(2017, 1, 16).getTime(),
        content: blog3
      },
      {
        id: this.uuidService.generate(),
        title: '设计模式的超简化描述！',
        date: new Date(2017, 1, 16).getTime(),
        content: blog4
      },
      {
        id: this.uuidService.generate(),
        title: 'HTML 部分问题与解答',
        date: new Date(2017, 1, 16).getTime(),
        content: blog5
      },
      {
        id: this.uuidService.generate(),
        title: 'FEX 面试问题',
        date: new Date(2017, 1, 16).getTime(),
        content: blog6
      },
      {
        id: this.uuidService.generate(),
        title: '前端工作面试常见问题',
        date: new Date(2017, 1, 16).getTime(),
        content: blog7
      },
      {
        id: this.uuidService.generate(),
        title: '前端工作面试HTML相关问题',
        date: new Date(2017, 1, 16).getTime(),
        content: blog8
      }
    ];
  }
}
