const create = require('../createResolverMap')('supplier');

module.exports = {
  Query: create('queries'),
  // Company: {
  //   employees: company => company.employees
  // }
};
