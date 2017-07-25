const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: String,
  date: Number,
  thumbnail: String,
  fullImage: String,
  description: String,
  link: String,
  category: String,
  content: String
});

const Project = mongoose.model('project', projectSchema);

module.exports = {
  getAllProjects: (req, res, next) => {
    Project.find({}, (err, doc) => {
      if (err) {
        console.error(err);
      } else {
        res.status(200).jsonp(doc);
      }
    });
  }
};