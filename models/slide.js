const mongoose = require('mongoose');
const SlideSchema = mongoose.Schema({
  index: Number,
  url: String,
  alt: String
});

const Slide = mongoose.model('slide', SlideSchema);

module.exports = {
  getAllSlides: (req, res, next) => {
    Slide.find({}, (err, doc) => {
      if (err) {
        console.error(err);
      } else {
        res.status(200).jsonp(doc);
      }
    });
  }
};