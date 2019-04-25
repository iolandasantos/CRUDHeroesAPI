var mongoose = require('mongoose');

var StudioSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  website: String,
  headquarter: String,
  updated_at: { type: Date, default: Date.now },
});


module.exports = mongoose.model('Studios', StudioSchema);

var Studio = module.exports = mongoose.model('Studios', StudioSchema);

module.exports.get = function (callback, limit) {
  Studio.find(callback).limit(limit);
}
