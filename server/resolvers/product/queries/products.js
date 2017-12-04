const Products = require('../../../models/product.model');
const { connectionFromArray } = require('graphql-relay');

const products = (obj, args) => Products.find({}).then(res => connectionFromArray(res, args));

module.exports = products;
