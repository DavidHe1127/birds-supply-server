const create = require('../createResolverMap')('customer');

module.exports = {
  Viewer: create('queries'),
  Mutation: create('mutations')
};
