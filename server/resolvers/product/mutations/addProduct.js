const Products = require('../../../models/product.model');
const Suppliers = require('../../../models/supplier.model');
const Parrots = require('../../../models/parrot.model');

const addProduct = async (obj, args) => {
  const { qty, parrotCode, price } = args.input;

  const supplierId = await Suppliers.findOne(
    {
      code: 'australia_macaws'
    },
    '_id code'
  );

  const { _id: parrotId } = await Parrots.findOne({
    code: parrotCode
  });

  const product = new Products({
    parrot: parrotId,
    supplier: supplierId,
    price,
    qty,
    sku: parrotCode
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
