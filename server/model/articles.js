const mongoose = require('mongoose')

const schemaArticles = new mongoose.Schema({
  title: String,
  short_desc: String,
  desc: String,
  picture: String,
  author: {
    type: Schema.Types.ObjectId, ref: 'User'
  }
}, {
  timestamp: true
});

const Articles = mongoose.model('Articles', schemaArticles);

module.exports = Articles
