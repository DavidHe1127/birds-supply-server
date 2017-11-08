const Employees = require('../../models/employee.model');

const filter = company_id => {
  console.log(company_id)
  return Employees.find({ company_id });
}

export default filter;
