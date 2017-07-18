const express = require('express');
const router = express.Router();
const Blogpost = require('../models/blogpost');
const Project = require('../models/project');
// const Slide = require('../models/slide');

const mongoose = require('mongoose');
const SlideSchema = mongoose.Schema({
    index: {
      type: Number 
    },
    url: {
      type: String
    },
    alt: {
      type: String
    }
  });
const slide = mongoose.model('slide', SlideSchema);

function setHeaders(res) {
  res.contentType('application/json');
}

// slides
router.get('/slides', (req, res, next) => {
  setHeaders(res);
  console.log('GET request SLIDES');
  const slides = slide.find({}, (err, doc) => {
    if (!err) {
      console.log(doc);
      res.jsonp(doc);
    } else {
      console.log(err);
    }
  });
});

// blog posts
router.get('/blogposts', (req, res, next) => {
  setHeaders(res);
  const posts = Blogpost.getAllBlogposts();
  res.jsonp(posts);
});

router.get('/projects', (req, res, next) => {
  setHeaders(res);
  res.jsonp({projects: true});
});


module.exports = router;