const Employees = require('../../models/employee.model');

const filter = query => Employees.find(query);

export default filter;
