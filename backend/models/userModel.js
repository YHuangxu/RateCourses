var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
  username: String,
  firstname: String,
  lastname: String,
  password: String,
  email: String,
  bio: String,
  image: String,
}, {timestamps: true});

var userModel = mongoose.model('userModel', userSchema);

module.exports = userModel;