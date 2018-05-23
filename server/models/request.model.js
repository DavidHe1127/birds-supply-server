const mongoose = require('mongoose');
const shortid = require('shortid');

const STATUS = [
  'pending',
  'approved',
  'rejected'
];

const RequestSchema = new mongoose.Schema(
  {
    parrot: {
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
      enum: STATUS,
      default: STATUS[0]
    },

    createdBy: {
      type: String,
      // required: true
    },
  },
  {
    collection: 'requests'
  }
);

module.exports = mongoose.model('Request', RequestSchema);
