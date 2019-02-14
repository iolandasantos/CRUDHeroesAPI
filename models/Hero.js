var mongoose = require('mongoose');

var HeroSchema = new mongoose.Schema({
  name: String,
  studio: String,
  power: String,
  weakness: String,
  updated_at: { type: Date, default: Date.now },
});


module.exports = mongoose.model('Heroes', HeroSchema);
