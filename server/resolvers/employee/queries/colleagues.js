// const Employees = require(_root + 'models/employee.model');
const Employees = require('../../../models/employee.model');

const colleagues = (obj, { company_id, employee_id }) => {
  const query = {};

  if (company_id) {
    query.company_id = company_id;
  }

  if (employee_id) {
    query.employee_id = {
      $ne: employee_id
    };
  }

  return Employees.find(query);
};

module.exports = colleagues;
