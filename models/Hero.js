var mongoose = require('mongoose');

var HeroSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  studio: {
    type: String,
    required: true
  },
  power: String,
  weakness: String,
  updated_at: { type: Date, default: Date.now },
});


module.exports = mongoose.model('Heroes', HeroSchema);

var Hero = module.exports = mongoose.model('Heroes', HeroSchema);


module.exports.get = function (callback, limit) {
  Hero.find(callback).limit(limit);
}