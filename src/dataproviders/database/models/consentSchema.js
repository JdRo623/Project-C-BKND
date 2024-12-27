const mongoose = require('mongoose');
const Consent = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  id_user_s: {
    type: String,
    required: true,
  },
  id_user_r: {
    type: String,
    required: true,
  },
  status: { //FV: FIRST_VALIDATION - SV: SECOND_VALIDATION - R - A
    type: String, 
    required: true,
  }
})
module.exports = mongoose.model('Consent',Consent);