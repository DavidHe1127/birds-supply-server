const Products = require('../../models/product.model');
const Requests = require('../../models/request.model');

const { connectionFromArray } = require('graphql-relay');

const viewer = async (obj, args, ctx) => {

  const [products, requests] = await Promise.all([

    // - excludes field
    Products.find()
      .populate('parrot')
      .populate({
        path: 'supplier',
        select: '-parrots'
      })
      .exec()
      .then(res => connectionFromArray(res, args)),

    Requests.find().then(res => connectionFromArray(res, args))

  ]);

  return {
    id: ctx.user.sub,
    products,
    requests
  };
};

module.exports = viewer;
