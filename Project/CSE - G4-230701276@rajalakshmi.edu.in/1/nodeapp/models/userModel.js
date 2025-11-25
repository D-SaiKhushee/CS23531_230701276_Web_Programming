const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, 
  },
  role: {
    type: String,
    required: true,
    enum: ['user', 'seller'], 
  },
  password: {
    type: String,
    required: true,
    minlength: 8, 
    maxlength: 255, 
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;