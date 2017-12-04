const Product = require('../../../models/product.model');

const product = (obj, { id, code }) => {
  const query = {};

  if (id) {
    query._id = id;
  }

  return Product.findOne(query);
};

module.exports = product;
