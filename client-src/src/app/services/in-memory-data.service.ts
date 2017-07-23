import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UuidService } from '../utils/uuid/uuid.service';
import { ProjectInfo } from '../models/project-info.type';
import { BlogPost } from '../models/blog-post.type';
import { carouselState } from '../models/carousel.state';
import { Slide } from '../models/slide.type';
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
        _id: {
          "$oid": "596c7164f36d281eb440bd3b"
        },
        index: 0,
        url: "http://ot8662avo.bkt.clouddn.com/17-7-23/17804569.jpg",
        alt: "Post Spectra"
      },
      {
        _id: {
          "$oid": "596c7164f36d281eb123bd3b"
        },
        index: 1,
        url: "http://ot8662avo.bkt.clouddn.com/17-7-17/47826487.jpg",
        alt: "3D Barrage Designer"
      },
      {
        _id: {
          "$oid": "596c7164f123481eb440bd3b"
        },
        index: 2,
        url: "http://ot8662avo.bkt.clouddn.com/17-7-23/64000547.jpg",
        alt: "JavaScript Calculator"
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
        _id: {
          "$oid": "596c5554f36d281eb440bd3b"
        },
        name: 'Post Spectra',
        date: new Date(2017, 4, 10).getTime(),
        thumbnail: 'http://ot8662avo.bkt.clouddn.com/17-7-17/19546583.jpg',
        description: 'Produce your SI easier.',
        link: 'https://nikaple.github.io/',
      },
      {
        _id: {
          "$oid": "59612345f36d281eb440bd3b"
        },
        name: '3D Barrage Designer',
        date: new Date(2016, 2, 15).getTime(),
        thumbnail: "http://ot8662avo.bkt.clouddn.com/17-7-17/10940537.jpg",
        description: "Produce your SI easier.",
        link: "https://nikaple.github.io/"
      },
      {
        _id: {
          "$oid": "596c7164f36d281eb443213b"
        },
        name: 'JS Calculator',
        date: new Date(2015, 12, 28).getTime(),
        thumbnail: 'http://ot8662avo.bkt.clouddn.com/17-7-17/36645280.jpg',
        description: 'A simple calculator with jQuery.',
        link: 'https://nikaple.github.io/javascript-calculator',
      }
    ];
  }

  getMockBlogPosts(): BlogPost[] {
    return [
      {
        _id: {
          "$oid": "596c7164f36d221eb440bd3b"
        },
        title: 'Linux环境搭建 —— Vagrant与VirtualBox的配置',
        date: new Date(2017, 4, 5).getTime(),
        content: blog1
      },
      {
        _id: {
          "$oid": "196c7164f36d281eb440bd3b"
        },
        title: 'Linux下的用户管理 —— 查看、添加用户',
        date: new Date(2017, 2, 16).getTime(),
        content: blog2
      },
      {
        _id: {
          "$oid": "596c7164f36d281eb440bdfb"
        },
        title: 'markdown语法测试',
        date: new Date(2017, 1, 16).getTime(),
        content: blog3
      },
      {
        _id: {
          "$oid": "596c7164f36d2d1eb440bd3b"
        },
        title: '设计模式的超简化描述！',
        date: new Date(2017, 1, 16).getTime(),
        content: blog4
      },
      {
        _id: {
          "$oid": "596c7164fc6d281eb440bd3b"
        },
        title: 'HTML 部分问题与解答',
        date: new Date(2017, 1, 16).getTime(),
        content: blog5
      },
      {
        _id: {
          "$oid": "596c7b64f36d281eb440bd3b"
        },
        title: 'FEX 面试问题',
        date: new Date(2017, 1, 16).getTime(),
        content: blog6
      },
      {
        _id: {
          "$oid": "596a7164f36d281eb440bd3b"
        },
        title: '前端工作面试常见问题',
        date: new Date(2017, 1, 16).getTime(),
        content: blog7
      },
      {
        _id: {
          "$oid": "596c7164fabcd81eb440bd3b"
        },
        title: '前端工作面试HTML相关问题',
        date: new Date(2017, 1, 16).getTime(),
        content: blog8
      }
    ];
  }
}
