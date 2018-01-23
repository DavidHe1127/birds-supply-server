const Products = require('../../models/product.model');

const delProduct = async (obj, args) => {
  const { id } = args.input;
  const params = {};

  if (id) {
    params._id = id;
  }

  var doc = await Products.findOneAndRemove(params);

  if (doc) {
    return {
      deletedProductId: doc._id
    };
  }

  return null;
};

module.exports = delProduct;
