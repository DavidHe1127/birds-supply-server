const Products = require('../../models/product.model');
const { connectionFromArray } = require('graphql-relay');

const bestSellers = async (obj, args) => {
  const products = await Products.find({
    qty: {
      $lt: 50
    }
  })
  .limit(3)
  .populate('parrot')
  .populate('supplier')
  .exec()
  .then(res => connectionFromArray(res, args));
  
  return Object.assign(products, { count: products.edges.length || 0 });
}

module.exports = bestSellers;
