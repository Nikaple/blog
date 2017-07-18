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

module.exports = slide;

module.exports.getSlideByIndex = function(idx, callback) {
  slide.find({index: idx}, callback);
};

module.exports.getAllSlides = function() {
  slide.find({}, (err, doc) => {
    if (err) {
      console.log(err);
    } else {
      console.log(doc);
    }
  });
};