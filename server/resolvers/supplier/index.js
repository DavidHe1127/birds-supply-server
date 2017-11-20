const create = require('../createResolverMap')('supplier');

module.exports = {
  Viewer: create('queries'),
  // Company: {
  //   employees: company => company.employees
  // }
};
