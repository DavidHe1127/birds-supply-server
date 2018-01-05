const Products = require('../../../models/product.model');

const delProduct = async (obj, args) => {
  const { id } = args.input;
  const params = {};

  if (id) {
    params._id = id;
  }

  return Products.findOneAndRemove(params);
};

module.exports = delProduct;
