const Products = require('../../../models/product.model');
const { connectionFromArray } = require('graphql-relay');

const bestSellers = (obj, args) =>
  Products.find({
    qty: {
      $lt: 50
    }
  })
    .limit(3)
    .populate('parrot')
    .exec()
    .then(res => connectionFromArray(res, args));

module.exports = bestSellers;