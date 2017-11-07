const Employees = require('../../models/employee.model');

const filter = (company_id) => Employees.find({ company: company_id });

export default filter;
