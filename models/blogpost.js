const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogpostSchema = new Schema({
  date: Number,
  content: String
});

const Blogpost = mongoose.model('blogpost', blogpostSchema);

module.exports = {
  getAllBlogposts: async (req, res, next) => {
    try {
      const posts = await Blogpost.find({});
      res.status(200).jsonp(posts);
    } catch(err) {
      next(err);
    }
  },
  getBlogById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const post = await Blogpost.findById(id);
      res.status(200).jsonp(post);
    } catch(err) {
      next(err);
    }
  }
}