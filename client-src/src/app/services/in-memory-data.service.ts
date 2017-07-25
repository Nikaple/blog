import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
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

  constructor() {}

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
          '$oid': '596c7164f36d281eb440bd3b'
        },
        index: 0,
        url: 'http://ot8662avo.bkt.clouddn.com/17-7-23/17804569.jpg',
        alt: 'Post Spectra'
      },
      {
        _id: {
          '$oid': '596c7164f36d281eb123bd3b'
        },
        index: 1,
        url: 'http://ot8662avo.bkt.clouddn.com/17-7-17/47826487.jpg',
        alt: '3D Barrage Designer'
      },
      {
        _id: {
          '$oid': '596c7164f123481eb440bd3b'
        },
        index: 2,
        url: 'http://ot8662avo.bkt.clouddn.com/17-7-24/59374301.jpg',
        alt: 'JavaScript Calculator'
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
          '$oid': '596c5554f36d281eb440bd3b'
        },
        name: 'Post Spectra',
        tabName: 'Post Spectra',
        date: new Date(2017, 6, 20).getTime(),
        thumbnail: 'http://ot8662avo.bkt.clouddn.com/17-7-17/19546583.jpg',
        fullImage: 'http://ot8662avo.bkt.clouddn.com/17-7-23/17804569.jpg',
        description: 'Produce your SI easier.',
        link: 'https://nikaple.github.io/post-spectra',
        category: 'front-end',
        content: '**Post spectra** is a specialized app for writing supporting information for chemistry papers, especially organic chemistry. Preparation of supporting information is always pain in the neck, handling errors and formatting styles are annoying for everyone. With the help of **Post Spectra**, you can format your original data in a rapid **cpp** - **c**opy-**p**aste-**p**aste way, with a standard style of [ACS Style Guide](http://pubs.acs.org/isbn/9780841239999). For more information, please try the [app](https://nikaple.github.io/post-spectra/) or visit the [project description page](https://github.com/Nikaple/post-spectra).',
      },
      {
        _id: {
          '$oid': '59612345f36d281eb440bd3b'
        },
        name: '3D Barrage Designer',
        tabName: 'Barrage Designer',
        date: new Date(2017, 3, 20).getTime(),
        thumbnail: 'http://ot8662avo.bkt.clouddn.com/17-7-17/10940537.jpg',
        fullImage: 'http://ot8662avo.bkt.clouddn.com/17-7-17/47826487.jpg',
        description: 'Design your own 3d barrages!',
        link: 'https://nikaple.github.io/3d-barrage-designer/',
        category: 'front-end',
        content: '**3D Barrage Designer** is project for visualizing 3d barrages, but the UI of the project is not completed. **Barrage**, or **danmaku**, is the most obvious feature in a [STG](https://en.wikipedia.org/wiki/Shoot_%27em_up), or *bullet-hell* game. Such games always feature high difficulty and steep learning curve, but there are still lots of people enjoying it. Currently, the demo is only showing a bunch of barrages you can make with this project as the UI part is not yet completed.',
      },
      {
        _id: {
          '$oid': '596c7164f36d281eb443213b'
        },
        name: 'JS Calculator',
        tabName: 'JS-calc',
        date: new Date(2015, 12, 28).getTime(),
        thumbnail: 'http://ot8662avo.bkt.clouddn.com/17-7-17/36645280.jpg',
        fullImage: 'http://ot8662avo.bkt.clouddn.com/17-7-24/59374301.jpg',
        description: 'A simple calculator with jQuery.',
        link: 'https://nikaple.github.io/javascript-calculator/',
        category: 'front-end',
        content: 'JS Calculator is a simple app I wrote dates back to when I started learning front end development at [FreeCodeCamp](https://www.freecodecamp.org/challenges/build-a-javascript-calculator). It was really worth commemorating as it was the first actual app I build. After half a year, it was re-styled and finally deployed on github pages.',
      },
      {
        _id: {
          '$oid': ''
        },
        name: 'Enjoy the Music',
        tabName: 'ETM',
        date: new Date(2014, 1, 23).getTime(),
        thumbnail: 'http://ot8662avo.bkt.clouddn.com/17-7-24/36359278.jpg',
        fullImage: 'http://ot8662avo.bkt.clouddn.com/17-7-24/2879621.jpg',
        description: 'Independent game. My first avoidance game.',
        link: 'https://tieba.baidu.com/p/2829824267/',
        previewLink: 'http://www.bilibili.com/video/av948251/',
        category: 'gamemaker',
        content: '**I Wanna Enjoy the Music** is one of my first games. It consists of pure avoidance bosses, with a built-in practice mode. When developing avoidance games, it feels like you\'re producing the PV, or (hard) coding the PV. It\'s dull, even painful when coding, but when you see the outcome and production, dude, it\'s all worth it!',
      },
      {
        _id: {
          '$oid': ''
        },
        name: 'Love the Miku',
        tabName: 'LTM',
        date: new Date(2014, 11, 5).getTime(),
        thumbnail: 'http://ot8662avo.bkt.clouddn.com/17-7-24/66374421.jpg',
        fullImage: 'http://ot8662avo.bkt.clouddn.com/17-7-24/85507586.jpg',
        description: 'Cooperated game. Avoidance made by myself.',
        link: 'https://tieba.baidu.com/p/3392316024/',
        previewLink: 'http://www.bilibili.com/video/av1817618/',
        category: 'gamemaker',
        content: '**I Wanna Love the Miku** is a cooperative adventure game which I organized and developed. With the help of other 4 makers with stages, I can concentrate on the part of avoidance bosses, and it turns out well! With a [delicious-fruit](http://delicious-fruit.com/ratings/game_details.php?id=12403) rating of 8.6, and over 100 videos on various websites, this game became well-known by the I Wanna community.',
      },
      {
        _id: {
          '$oid': ''
        },
        name: 'Fapple',
        tabName: 'Fapple',
        date: new Date(2015, 2, 17).getTime(),
        thumbnail: 'http://ot8662avo.bkt.clouddn.com/17-7-24/87812479.jpg',
        fullImage: 'http://ot8662avo.bkt.clouddn.com/17-7-24/40235632.jpg',
        description: 'Independent game. Story of kid and apples.',
        link: 'https://tieba.baidu.com/p/3590083294/',
        previewLink: 'http://www.bilibili.com/video/av4746254/index_4.html',
        category: 'gamemaker',
        content: '**I Wanna Fapple** is an independent adventure game. This boss of game is dedicated to [Touhou](https://en.wikipedia.org/wiki/Touhou_Project) series by ZUN, with various forms of boss battle. The difficulty curve increased sharply at stage 4, so be prepared!',
      },
    ];
  }

  getMockBlogPosts(): BlogPost[] {
    return [
      {
        _id: {
          '$oid': '596c7164f36d221eb440bd3b'
        },
        date: new Date(2017, 4, 5).getTime(),
        content: blog1
      },
      {
        _id: {
          '$oid': '196c7164f36d281eb440bd3b'
        },
        date: new Date(2017, 2, 16).getTime(),
        content: blog2
      },
      {
        _id: {
          '$oid': '596c7164f36d281eb440bdfb'
        },
        date: new Date(2017, 1, 16).getTime(),
        content: blog3
      },
      {
        _id: {
          '$oid': '596c7164f36d2d1eb440bd3b'
        },
        date: new Date(2017, 1, 16).getTime(),
        content: blog4
      },
      {
        _id: {
          '$oid': '596c7164fc6d281eb440bd3b'
        },
        date: new Date(2017, 1, 16).getTime(),
        content: blog5
      },
      {
        _id: {
          '$oid': '596c7b64f36d281eb440bd3b'
        },
        date: new Date(2017, 1, 16).getTime(),
        content: blog6
      },
      {
        _id: {
          '$oid': '596a7164f36d281eb440bd3b'
        },
        date: new Date(2017, 1, 16).getTime(),
        content: blog7
      },
      {
        _id: {
          '$oid': '596c7164fabcd81eb440bd3b'
        },
        date: new Date(2017, 1, 16).getTime(),
        content: blog8
      }
    ];
  }
}
