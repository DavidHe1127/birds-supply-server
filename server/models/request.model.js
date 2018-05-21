const mongoose = require('mongoose');
const shortid = require('shortid');


const RequestSchema = new mongoose.Schema(
  {
    bird: {
      type: String,
      required: true
    },

    _id: {
      type: String,
      default: shortid.generate
    },

    code: {
      type: String
    },

    reason: {
      type: String
    },

    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected']
    },

    createdBy: {
      type: String,
      required: true
    },
  },
  {
    collection: 'requests'
  }
);

module.exports = mongoose.model('Request', RequestSchema);
