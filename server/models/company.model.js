const mongoose = require('mongoose');

const Employee = require('./employee.model');

const CompanySchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  address: {
    type: String,
    required: true
  },

  employees: [Employee.schema]

}, {
  collection: 'companies'
});

module.exports = mongoose.model('Company', CompanySchema);
