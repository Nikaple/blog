const express = require('express');
const router = express.Router();
const uuidv4 = require('uuid/v4');
const blog1 = require('../data/blogs/mock-blog1');
const blog2 = require('../data/blogs/mock-blog2');
const blog3 = require('../data/blogs/mock-blog3');
const blog4 = require('../data/blogs/mock-blog4');
const blog5 = require('../data/blogs/mock-blog5');
const blog6 = require('../data/blogs/mock-blog6');
const blog7 = require('../data/blogs/mock-blog7');
const blog8 = require('../data/blogs/mock-blog8');


class MockData {
  constructor(){}
  getMockHomeSlides() {
    const slides = [
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
      }
    ];
    return slides.map((slide, index) => {
      slide.isActive = index === 0 ? true : false;
      slide.state = 'center';
      return slide;
    });
  }

  getMockHomeProjects() {
    return [
      {
        id: uuidv4(),
        name: 'Post Spectra',
        date: new Date(2017, 4, 10).getTime(),
        thumbnail: '../../assets/imgs/project1.jpg',
        description: 'Produce your SI easier.',
        link: 'https://nikaple.github.io/',
      },
      {
        id: uuidv4(),
        name: '3D Barrage Designer',
        date: new Date(2016, 2, 15).getTime(),
        thumbnail: '../../assets/imgs/project2.jpg',
        description: 'Design your own 3d barrages!',
        link: 'https://nikaple.github.io/3d-barrage-designer'
      },
      {
        id: uuidv4(),
        name: 'JS Calculator',
        date: new Date(2015, 12, 28).getTime(),
        thumbnail: '../../assets/imgs/project3.jpg',
        description: 'A simple calculator with jQuery.',
        link: 'https://nikaple.github.io/javascript-calculator',
      }
    ];
  }

  getMockBlogPosts() {
    return [
      {
        id: uuidv4(),
        title: 'Linux环境搭建 —— Vagrant与VirtualBox的配置',
        date: new Date(2017, 4, 5).getTime(),
        content: blog1
      },
      {
        id: uuidv4(),
        title: 'Linux下的用户管理 —— 查看、添加用户',
        date: new Date(2017, 2, 16).getTime(),
        content: blog2
      },
      {
        id: uuidv4(),
        title: 'markdown语法测试',
        date: new Date(2017, 1, 16).getTime(),
        content: blog3
      },
      {
        id: uuidv4(),
        title: '设计模式的超简化描述！',
        date: new Date(2017, 1, 16).getTime(),
        content: blog4
      },
      {
        id: uuidv4(),
        title: 'HTML 部分问题与解答',
        date: new Date(2017, 1, 16).getTime(),
        content: blog5
      },
      {
        id: uuidv4(),
        title: 'FEX 面试问题',
        date: new Date(2017, 1, 16).getTime(),
        content: blog6
      },
      {
        id: uuidv4(),
        title: '前端工作面试常见问题',
        date: new Date(2017, 1, 16).getTime(),
        content: blog7
      },
      {
        id: uuidv4(),
        title: '前端工作面试HTML相关问题',
        date: new Date(2017, 1, 16).getTime(),
        content: blog8
      }
    ];
  }
}

const mock = new MockData();

function setHeaders(res) {
  res.contentType('application/json');
}

// log
router.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

// slides
router.get('/slides', (req, res, next) => {
  setHeaders(res);
  res.jsonp(mock.getMockHomeSlides());
});

// blog posts
router.get('/blogposts', (req, res, next) => {
  setHeaders(res);
  res.jsonp(mock.getMockBlogPosts());
});

router.get('/projects', (req, res, next) => {
  setHeaders(res);
  res.jsonp(mock.getMockHomeProjects());
});


module.exports = router;