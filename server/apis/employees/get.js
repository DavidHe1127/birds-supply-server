const Employee = require('../../models/employee.model');

const get = query => Employee.findOne(query);

export default get;
