const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogpostSchema = new Schema({
  date: Number,
  content: String
});

const Blogpost = mongoose.model('blogpost', blogpostSchema);

module.exports = {
  getAllBlogposts: (req, res, next) => {
    Blogpost.find({}, (err, doc) => {
      if (err) {
        console.error(err);
      } else {
        res.status(200).jsonp(doc);
      }
    });
  },
  getBlogById: (req, res, next) => {
      const { id } = req.params;
      Blogpost.findById(id, (err, doc) => {
        if (err) {
          console.error(err);
        } else {
          res.status(200).jsonp(doc);
        }
      });
  }
}