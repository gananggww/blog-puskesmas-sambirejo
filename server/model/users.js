const mongoose = require('mongoose')

const schemaUsers = new mongoose.Schema({
  fb_id: String,
  name: String,
  email: String
  picture: String
});

const User = mongoose.model('User', schemaUsers);

module.exports = User
