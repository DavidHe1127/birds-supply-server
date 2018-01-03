const Products = require('../../../models/product.model');
const Suppliers = require('../../../models/supplier.model');
const Parrots = require('../../../models/parrot.model');

const addProduct = async (obj, args) => {
  const { qty, code, price } = args.input;

  const supplierId = await Suppliers.findOne(
    {
      code: 'australia_macaws'
    },
    '_id code'
  );

  const { _id: parrotId, sku } = await Parrots.findOne({
    code
  });

  const product = new Products({
    parrot: parrotId,
    supplier: supplierId,
    qty,
    sku: code
  });

  return product.save();
};

module.exports = addProduct;

// mutation {
//   addProduct(input: {
//     price: 777
//     code: "sulphur-crested_cockatoo"
//     qty: 77
//   }) {
//     id
//   }
// }