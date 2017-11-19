const Suppliers = require('../../../models/supplier.model');

const suppliers = obj => Suppliers.find({});

module.exports = suppliers;
