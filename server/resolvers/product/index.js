const create = require('../createResolverMap')('product');

module.exports = {
  Query: create('queries'),
  // Company: {
  //   employees: company => company.employees
  // }
};
