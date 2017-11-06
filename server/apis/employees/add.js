const Employee = require('../../models/employee.model');

const add = ({
  first_name,
  last_name,
  email,
  gender,
  company,
  admin,
  ip_address
}) =>
  new Employee({
    first_name,
    last_name,
    email,
    gender,
    admin,
    company
  }).save();

export default add;
