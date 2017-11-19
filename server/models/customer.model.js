const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      match: [/.+\@.+\..+/, 'Please fill a valid email address'],
      index: true,
      unique: true
    },

    first_name: {
      type: String,
      trim: true,
      required: true
    },

    last_name: {
      type: String,
      trim: true,
      required: true
    },

    avatar_id: {
      type: String
    },

    gender: {
      type: String,
      enum: ['female', 'male']
    }
  },
  {
    collection: 'customers'
  }
);

module.exports = mongoose.model('Customer', CustomerSchema);
