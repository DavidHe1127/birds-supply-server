const Supplier = require('../../../models/supplier.model');

const supplier = (obj, { id, code }) => {
  const query = {};

  if (id) {
    query._id = id;
  }

  if (code) {
    query.code = code;
  }

  return Supplier.findOne(query).populate('parrots');
};

module.exports = supplier;
