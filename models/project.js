const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: String,
  data: Number,
  thumbnail: String,
  description: String,
  link: String
});

const projectModel = mongoose.model('project', projectSchema);