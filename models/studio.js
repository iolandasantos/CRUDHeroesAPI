var mongoose = require('mongoose');

var StudioSchema = new mongoose.Schema({
  name: String,
  studio: Number,
  website: String,
  headquarter: String,
  updated_at: { type: Date, default: Date.now },
});


module.exports = mongoose.model('Studios', StudioSchema);
