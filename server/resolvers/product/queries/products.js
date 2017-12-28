const Products = require('../../../models/product.model');
const Supplier = require('../../../models/supplier.model');

const { connectionFromArray } = require('graphql-relay');

const products = async (obj, args) => {
  const query = {};

  if (args.supplierId) {
    query.supplier = id;
  } else {
    // keep it until supplier auth done
    query.supplier = await Supplier.findOne({
      code: 'australia_macaws'
    }).select('_id');
  }

  return Products.find(query)
    .populate('parrot')
    .populate({
      path: 'supplier',
      select: '-parrots'
    })
    .exec()
    .then(res => connectionFromArray(res, args));
};

module.exports = products;
