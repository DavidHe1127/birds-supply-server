const Products = require('../../models/product.model');
// const Suppliers = require('../../models/supplier.model');

const {connectionFromArray} = require('graphql-relay');

const viewer = async (obj, args, ctx) => {
  // - excludes field
  const products = await Products.find()
    .populate('parrot')
    .populate({
      path: 'supplier',
      select: '-parrots',
    })
    .exec()
    .then(res => connectionFromArray(res, args));

  return Object.assign(products, {count: products.edges.length || 0});
};

module.exports = viewer;
