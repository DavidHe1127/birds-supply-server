const Customers = require('../../../models/customer.model');

const customers = obj => Customers.find({});

module.exports = customers;
