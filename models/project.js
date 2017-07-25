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
  getAllProjects: async (req, res, next) => {
    try {
      const projects = await Project.find({});
      res.status(200).jsonp(projects);
    } catch(err) {
      next(err);
    }
  }
};