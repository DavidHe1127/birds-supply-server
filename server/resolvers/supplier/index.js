const create = require('../createResolverMap')('supplier');
const { connectionFromArray } = require('graphql-relay');

module.exports = {
  Query: create('queries'),
  Supplier: {
    parrotsConnection: (obj, args) => connectionFromArray(obj.parrots, args)
  }
};
