const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  address: {
    type: String,
    required: true
  }

}, {
  collection: 'companies'
});

module.exports = mongoose.model('Company', CompanySchema);
