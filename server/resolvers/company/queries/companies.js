const Companies = require('../../../models/company.model');

const companies = (obj, args) => Companies.find({});

module.exports = companies;
