'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  login: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
     type: String,
     enum: ['admin', 'user']
   }],
   default: ['user']
  }
});

module.exports = mongoose.model('Users', UserSchema);
