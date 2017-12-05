const Product = require('../../../models/product.model');

const product = (obj, { id, code }) => {
  const query = {};

  if (id) {
    query._id = id;
  }

  return Product.findOne(query).populate('parrot').populate({
    path: 'supplier',
    select: '-parrots'
  }).exec();
};

module.exports = product;
