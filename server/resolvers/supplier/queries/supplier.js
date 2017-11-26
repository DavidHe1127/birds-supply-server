const Supplier = require('../../../models/supplier.model');

const supplier = (obj, { id, code }) => {
  const query = {};

  if (id) {
    query._id = id;
  }

  if (code) {
    query.code = code;
  }

  return Supplier.findOne(query);
};

module.exports = supplier;
