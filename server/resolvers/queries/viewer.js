const Products = require('../../models/product.model');
const { connectionFromArray } = require('graphql-relay');

const viewer = async (obj, args, ctx) => {
  // - excludes field
  const products = await Products.find()
    .populate('parrot')
    .populate({
      path: 'supplier',
      select: '-parrots'
    })
    .exec()
    .then(res => connectionFromArray(res, args));

    console.log(ctx.user.sub);
  return {
    id: ctx.user.sub,
    products
  };
};

module.exports = viewer;
