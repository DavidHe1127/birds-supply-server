const Company = require('../../../models/company.model');

const company = id => Company.findById(id);

module.exports = company;
