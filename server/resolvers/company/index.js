const create = require('../createResolverMap')('company');

module.exports = {
  Query: create('queries'),
  // Company: {
  //   employees: company => company.employees
  // }
};
