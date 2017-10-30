const fs = require('fs');

import Employee from './index';
const { fetch } from '../../utils';

const add = ({
  first_name,
  last_name,
  email,
  gender,
  company_id,
  admin,
  ip_address
}) => {
  const employee = new Employee(arguments[0]);
  data.employees.push(employee);

  return new Promise(resolve, reject) => {


  };
};

export default add;
