const Employees = require('../../../models/employee.model');

const allAdmins = (obj, {company_id}) => {
  const query = {
    admin: true
  };
  if (company_id) {
    query.company_id;
  }
  return Employees.find(query);
};

module.exports = allAdmins;
