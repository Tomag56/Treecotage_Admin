const mongoose = require('mongoose');

articleSchema = mongoose.Schema({
  title: String,
  introduction: String,
  content: String,
  publisherAt: Number,
  image: String,
});

module.exports = mongoose.model('Article', articleSchema);
