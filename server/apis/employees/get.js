const Employee = require('../../models/employee.model');

const get = payload => Employee.find(payload);

export default get;