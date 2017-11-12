const Employees = require('../../../models/employee.model');

const employees = (obj, { company_id }) => {
  const query = {};

  if (company_id) {
    query.company_id;
  }

  return Employee.find(query);
};

module.exports = employees;
