const express = require('express');
const router = express.Router();
const Blogpost = require('../models/blogpost');
const Project = require('../models/project');
const Slide = require('../models/slide');

const slideUrl = '/slides';
const blogpostUrl = '/blogposts';
const projectsUrl = '/projects';

// default
router.get('/', (req, res, next) => {
  res.status(200).jsonp({
    slides_url: req.hostname + req.baseUrl + slideUrl,
    blogposts_url: req.hostname + req.baseUrl + slideUrl,
    projects_url: req.hostname + req.baseUrl + projectsUrl
  });
});

// slides
router.get(slideUrl, Slide.getAllSlides);

// blog posts
router.get(blogpostUrl, Blogpost.getAllBlogposts);
router.get(`${blogpostUrl}/:id`, Blogpost.getBlogById);

// projects
router.get(projectsUrl, Project.getAllProjects);

module.exports = router;