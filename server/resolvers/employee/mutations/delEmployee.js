const Employee = require('../../../models/employee.model');

const delEmployee = (root, args) => {
  const { _id } = args.input;

  return Employee.findByIdAndRemove(_id);
};

module.exports = delEmployee;
