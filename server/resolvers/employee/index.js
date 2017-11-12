const create = require('../createResolverMap')('employee');

module.exports = {
  Query: create('queries'),
  Mutation: create('mutations')
};
