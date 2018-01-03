const create = require('../createResolverMap')('product');

module.exports = {
  Query: create('queries'),
  Mutation: create('mutations')
  // Company: {
  //   employees: company => company.employees
  // }
};
