import filter from './apis/employees/filter';
import get from './apis/employees/get';

const employee = (obj, { first_name, email }) => {
  const query = {};

  if (first_name) {
    query.first_name = first_name;
  }

  if (email) {
    query.email = email;
  }

  return get(query);
};

const employees = (obj, { company_id }) => filter({ company_id });

const allAdmins = (obj, { company_id }) => filter({ admin: true });

const colleagues = (obj, { company_id, employee_id }) =>
  filter({
    company_id,
    employee_id: {
      $ne: employee_id
    }
  });

export { employee, employees, allAdmins, colleagues };
