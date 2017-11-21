const create = require('../createResolverMap')('customer');

module.exports = {
  Query: create('queries'),
  Mutation: create('mutations')
};
