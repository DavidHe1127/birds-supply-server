import Employee from './index';
import { read, write } from '../../utils';

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
  return read().then(({ employees }) => {
    employees.push(employee);
    return write(employees);
  });
};

export default add;
