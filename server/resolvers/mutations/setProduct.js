const Products = require('../../models/product.model');

const setProduct = async (obj, args) => {
  const { id, qty, price } = args.input;
  const params = {};

  if (qty) {
    params.qty = qty;
  }

  if (price) {
    params.price = price;
  }

  const product = await Products.findByIdAndUpdate(id, params, {
    new: true
  });

  return {
    product
  };
};

module.exports = setProduct;
