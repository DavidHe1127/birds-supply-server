const Supplier = require('../../../models/supplier.model');

const supplier = id => Supplier.findById(id);

module.exports = supplier;
