const Employee = require('../../../models/employee.model');

const employee = (obj, { first_name, email }) => {
  const query = {};

  if (first_name) {
    query.first_name = first_name;
  }

  if (email) {
    query.email = email;
  }

  return Employee.findOne(query);
};

module.exports = employee;
