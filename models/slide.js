const mongoose = require('mongoose');
const SlideSchema = mongoose.Schema({
  index: Number,
  url: String,
  alt: String
});

const Slide = mongoose.model('slide', SlideSchema);

module.exports = {
  getAllSlides: async (req, res, next) => {
    try {
      const slides = await Slide.find({});
      res.status(200).jsonp(slides);
    } catch(err) {
      next(err);
    }
  }
};