const Parrots = require('../../models/parrot.model');
const Suppliers = require('../../models/supplier.model');

const { connectionFromArray } = require('graphql-relay');

const parrotsToProduct = async (obj, args) => {
  const query = {};
  let supplierParrots;

  if (args.supplierId) {
    query.supplier = supplierId;
  } else {
    supplierParrots = await Suppliers.findOne({
      code: 'australia_macaws'
    })
      .populate({
        path: 'parrots',
        select: 'code'
      })
      .select('parrots')
      .exec()
      .then(res => res.parrots.map(x => x.code));
  }

  const allParrots = await Parrots.find().select('code');
  const usableParrots = allParrots.filter(p => !supplierParrots.includes(p.code));

  return connectionFromArray(usableParrots, args);
};

module.exports = parrotsToProduct;
