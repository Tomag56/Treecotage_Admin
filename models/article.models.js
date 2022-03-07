const mongoose = require('mongoose');

articleSchema = mongoose.Schema({
  title: String,
  introduction: String,
  content1: String,
  content2: String,
  publishedAt: Number,
  image: String,
  onoffswitch: String,
});

module.exports = mongoose.model('Article', articleSchema);
