const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({

  email: {
    type: String,
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },

  name: {
    first: {
      type:String,
      trim: true,
      required: true
    },
    last: {
      type:String,
      trim: true,
      required: true
    }
  },

  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    index: true,
    require: true
  },

  gender: {
    type: String,
    enum: ['female', 'male']
  },

  admin: {
    type: Boolean,
    default: false
  },

  ip_address: {
    type: String
  }

}, {
  collection: 'employees'
});

module.exports = mongoose.model('Employee', EmployeeSchema);
