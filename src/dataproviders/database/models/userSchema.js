const mongoose = require('mongoose');
const ConsentUser = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  consentCode: {
    type: String,
    required: true,
    unique: true,
  },
  consentCodeDate: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  }
})
module.exports = mongoose.model('ConsentUser', ConsentUser);