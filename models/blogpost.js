const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogpostSchema = new Schema({
  date: Number,
  content: String
});

const blogModel = mongoose.model('blogpost', blogpostSchema);

module.exports = {
  getBlogById(id, callback) {
    blogModel.findById(id, callback);
  },
  getAllBlogposts(callback) {
    // console.log(blogModel.collection);
    blogModel.find({}, (err, docs) => {
      if (!err){ 
      } else {throw err;}
    });
  }
}