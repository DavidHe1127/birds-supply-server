const Employee = require('../../../models/employee.model');

const addEmployee = (root, args) => {
  const {
    first_name,
    last_name,
    email,
    gender,
    admin,
    company_id
  } = args.input;

  return new Employee({
    first_name,
    last_name,
    email,
    gender,
    admin,
    company_id
  }).save();
};

module.exports = addEmployee;
