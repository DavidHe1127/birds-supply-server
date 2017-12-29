const Products = require('../../../models/product.model');
const Suppliers = require('../../../models/supplier.model');

const { connectionFromArray } = require('graphql-relay');

const products = async (obj, args) => {
  const query = {};

  if (args.supplierId) {
    query.supplier = supplierId;
  } else {
    // keep it until supplier auth done
    query.supplier = await Suppliers.findOne({
      code: 'australia_macaws'
    }).select('_id');
  }

  // - excludes field
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
